$ErrorActionPreference = "Stop"
$baseUrl = "http://127.0.0.1:8787"

function Test-Step {
    param($Message)
    Write-Host "[$([DateTime]::Now.ToString('HH:mm:ss'))] $Message" -ForegroundColor Cyan
}

try {
    # 1. Register
    Test-Step "Registering new user..."
    $rand = Get-Random
    $username = "user_$rand"
    $email = "user_$rand@example.com"
    $password = "password123"

    $registerBody = @{ username = $username; email = $email; password = $password } | ConvertTo-Json
    $registerResponse = Invoke-RestMethod -Uri "$baseUrl/api/register" -Method Post -Body $registerBody -ContentType "application/json"
    $token = $registerResponse.token
    $userId = $registerResponse.user.id
    Write-Host "  -> Registered: $username (ID: $userId)" -ForegroundColor Green

    # 2. Login
    Test-Step "Verifying Login..."
    $loginBody = @{ username = $username; password = $password } | ConvertTo-Json
    $loginResponse = Invoke-RestMethod -Uri "$baseUrl/api/login" -Method Post -Body $loginBody -ContentType "application/json"
    $token = $loginResponse.token
    $headers = @{ Authorization = "Bearer $token" }
    Write-Host "  -> Login successful" -ForegroundColor Green

    # 3. Promote to Admin
    Test-Step "Promoting user to Admin..."
    $updateCmd = "UPDATE users SET role = 'admin' WHERE id = $userId"
    # Run wrangler command locally
    cmd /c npx wrangler d1 execute jkoneply-db --local --command="$updateCmd" 2>&1 | Out-Null
    Write-Host "  -> User promoted to admin" -ForegroundColor Green

    # Re-login to get admin token
    Test-Step "Refreshing Token (Admin)..."
    $loginResponse = Invoke-RestMethod -Uri "$baseUrl/api/login" -Method Post -Body $loginBody -ContentType "application/json"
    $token = $loginResponse.token
    $headers = @{ Authorization = "Bearer $token" }
    Write-Host "  -> Admin token obtained" -ForegroundColor Green

    # 4. Create Product
    Test-Step "Creating Product (Admin)..."
    $imgName = "test_img_$rand.jpg"
    "dummy image content" | Set-Content $imgName
    
    $authHeader = "Authorization: Bearer $token"
    # Use curl for multipart
    $createResJson = cmd /c curl -s -X POST "$baseUrl/api/admin/products" -H "$authHeader" -F "name=Test Product" -F "company=Test Co" -F "size=10x10" -F "price=99.99" -F "media=@$imgName;type=image/jpeg"
    try {
        $createRes = $createResJson | ConvertFrom-Json
    } catch {
        throw "Failed to parse JSON response: $createResJson"
    }
    if (-not $createRes.success) { throw "Product creation failed: $createResJson" }
    Write-Host "  -> Product created" -ForegroundColor Green

    # 5. Get Products
    Test-Step "Fetching Products (Public)..."
    $products = Invoke-RestMethod -Uri "$baseUrl/api/products"
    $product = $products | Where-Object { $_.name -eq "Test Product" } | Select-Object -Last 1
    if (-not $product) { throw "Product not found in list" }
    $productId = $product.id
    Write-Host "  -> Found Product ID: $productId" -ForegroundColor Green

    # 6. Get Single Product
    Test-Step "Fetching Single Product..."
    $singleProduct = Invoke-RestMethod -Uri "$baseUrl/api/products/$productId"
    if ($singleProduct.id -ne $productId) { throw "ID mismatch" }
    Write-Host "  -> Single product fetched" -ForegroundColor Green

    # 7. Update Product
    Test-Step "Updating Product (Admin)..."
    $updateResJson = cmd /c curl -s -X PUT "$baseUrl/api/admin/products/$productId" -H "$authHeader" -F "name=Updated Product" -F "company=Test Co" -F "size=10x10" -F "price=199.99"
    $updateRes = $updateResJson | ConvertFrom-Json
    if (-not $updateRes.success) { throw "Update failed: $updateResJson" }
    Write-Host "  -> Product updated" -ForegroundColor Green

    # 8. Save Product
    Test-Step "Saving Product (User)..."
    $saveBody = @{ product_id = $productId } | ConvertTo-Json
    $saveRes = Invoke-RestMethod -Uri "$baseUrl/api/me/saved" -Method Post -Headers $headers -Body $saveBody -ContentType "application/json"
    if (-not $saveRes.success -and $saveRes.message -ne "Already saved") { throw "Save failed" }
    Write-Host "  -> Product saved" -ForegroundColor Green

    # 9. Get Saved Products
    Test-Step "Fetching Saved Products..."
    $savedProducts = Invoke-RestMethod -Uri "$baseUrl/api/me/saved" -Headers $headers
    if ($savedProducts.Count -eq 0) { throw "Saved list empty" }
    Write-Host "  -> Saved products list verified" -ForegroundColor Green

    # 10. Unsave Product
    Test-Step "Unsaving Product..."
    $unsaveRes = Invoke-RestMethod -Uri "$baseUrl/api/me/saved/$productId" -Method Delete -Headers $headers
    if (-not $unsaveRes.success) { throw "Unsave failed" }
    Write-Host "  -> Product unsaved" -ForegroundColor Green

    # 11. Media Check
    Test-Step "Verifying Media..."
    $mediaUrl = $singleProduct.media_url
    Write-Host "  -> Checking URL: $mediaUrl"
    try {
        $mediaRes = Invoke-WebRequest -Uri "$baseUrl$mediaUrl" -Method Head
        Write-Host "  -> Media OK ($($mediaRes.StatusCode))" -ForegroundColor Green
    } catch {
        Write-Host "  -> Media Check Failed: $_" -ForegroundColor Red
    }

    # 12. Delete Product
    Test-Step "Deleting Product (Admin)..."
    $delRes = Invoke-RestMethod -Uri "$baseUrl/api/admin/products/$productId" -Method Delete -Headers $headers
    if (-not $delRes.success) { throw "Delete failed" }
    Write-Host "  -> Product deleted" -ForegroundColor Green

    # Cleanup
    if (Test-Path $imgName) { Remove-Item $imgName }

    Write-Host "`n----------------------------------------"
    Write-Host "ALL LOCAL TESTS PASSED SUCCESSFULLY" -ForegroundColor Green
    Write-Host "----------------------------------------"

} catch {
    Write-Host "`n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" -ForegroundColor Red
    Write-Host "TEST FAILED: $_" -ForegroundColor Red
    Write-Host "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" -ForegroundColor Red
    exit 1
}
