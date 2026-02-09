$ErrorActionPreference = "Stop"

Write-Host "Logging in..."
try {
    $loginResponse = Invoke-RestMethod -Uri "http://127.0.0.1:8787/api/login" -Method Post -Body '{"username":"testuser", "password":"password123"}' -ContentType "application/json"
    $token = $loginResponse.token
    Write-Host "Token obtained."
} catch {
    Write-Host "Login failed: $_"
    exit 1
}

# Use curl.exe for multipart upload
$authHeader = "Authorization: Bearer $token"

Write-Host "Uploading test.jpeg..."
cmd /c curl -X POST http://127.0.0.1:8787/api/admin/products -H "$authHeader" -F "name=Test Image Product" -F "company=Test Co" -F "size=10x10" -F "price=100" -F "media=@test.jpeg;type=image/jpeg"
Write-Host "`n"

Write-Host "Uploading test.mp4..."
cmd /c curl -X POST http://127.0.0.1:8787/api/admin/products -H "$authHeader" -F "name=Test Video Product" -F "company=Test Co" -F "size=20x20" -F "price=200" -F "media=@test.mp4;type=video/mp4"
Write-Host "`n"

Write-Host "Listing products..."
$products = Invoke-RestMethod -Uri "http://127.0.0.1:8787/api/products"
$products | Format-Table id, name, media_key, media_type, media_url
