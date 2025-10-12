export interface Product {
  id: number
  name: string
  description: string
  category: string
  thickness: string
  grade: string
  price: number
  image: string
  features: string[]
}

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Birch Plywood',
    description: 'High-quality birch plywood with excellent strength and durability. Perfect for furniture making and cabinetry.',
    category: 'Plywood',
    thickness: '12mm',
    grade: 'A-A',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1600857062241-98c0a9ed8f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    features: ['Birch veneer', '13 layers', 'Water resistant', 'Smooth finish']
  },
  {
    id: 2,
    name: 'Marine Grade Plywood',
    description: 'Waterproof plywood designed for marine applications and outdoor use. Exceptional durability in wet conditions.',
    category: 'Plywood',
    thickness: '18mm',
    grade: 'Marine',
    price: 65.50,
    image: 'https://images.unsplash.com/photo-1595535873420-a59a1b0c9a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    features: ['Waterproof', 'Boiling water proof', 'Marine adhesive', 'BWR certified']
  },
  {
    id: 3,
    name: 'Hardwood Oak Timber',
    description: 'Solid oak timber with beautiful grain patterns. Ideal for high-end furniture and flooring applications.',
    category: 'Timber',
    thickness: '25mm',
    grade: 'Select',
    price: 85.75,
    image: 'https://images.unsplash.com/photo-1595412693485-7be58aef4e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    features: ['Solid hardwood', 'Kiln dried', 'Straight grain', 'Furniture grade']
  },
  {
    id: 4,
    name: 'Softwood Pine Timber',
    description: 'Lightweight and easy to work with softwood pine. Great for construction framing and DIY projects.',
    category: 'Timber',
    thickness: '50mm',
    grade: 'Standard',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1595535873420-a59a1b0c9a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    features: ['Softwood', 'Kiln dried', 'Easy to work', 'Cost effective']
  },
  {
    id: 5,
    name: 'Bamboo Plywood',
    description: 'Eco-friendly bamboo plywood with exceptional strength and sustainability. Beautiful natural appearance.',
    category: 'Plywood',
    thickness: '15mm',
    grade: 'A-B',
    price: 52.25,
    image: 'https://images.unsplash.com/photo-1595412693485-7be58aef4e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    features: ['Sustainable', 'Eco-friendly', 'High strength', 'Beautiful grain']
  },
  {
    id: 6,
    name: 'Walnut Hardwood',
    description: 'Premium walnut hardwood with rich chocolate color and beautiful figuring. Perfect for luxury furniture.',
    category: 'Timber',
    thickness: '30mm',
    grade: 'Premium',
    price: 120.00,
    image: 'https://images.unsplash.com/photo-1600857062241-98c0a9ed8f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    features: ['Luxury hardwood', 'Rich color', 'Fine grain', 'Premium grade']
  }
]

export default products