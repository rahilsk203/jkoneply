import gallery1 from '../assets/galleryImage/gallery1.jpg'
import gallery2 from '../assets/galleryImage/gallery2.jpg'
import gallery3 from '../assets/galleryImage/gallery3.jpg'
import gallery4 from '../assets/galleryImage/gallery4.jpg'

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
    price: 3500,
    image: gallery1,
    features: ['Birch veneer', '13 layers', 'Water resistant', 'Smooth finish']
  },
  {
    id: 2,
    name: 'Marine Grade Plywood',
    description: 'Waterproof plywood designed for marine applications and outdoor use. Exceptional durability in wet conditions.',
    category: 'Plywood',
    thickness: '18mm',
    grade: 'Marine',
    price: 5000,
    image: gallery2,
    features: ['Waterproof', 'Boiling water proof', 'Marine adhesive', 'BWR certified']
  },
  {
    id: 3,
    name: 'Hardwood Oak Timber',
    description: 'Solid oak timber with beautiful grain patterns. Ideal for high-end furniture and flooring applications.',
    category: 'Timber',
    thickness: '25mm',
    grade: 'Select',
    price: 6500,
    image: gallery3,
    features: ['Solid hardwood', 'Kiln dried', 'Straight grain', 'Furniture grade']
  },
  {
    id: 4,
    name: 'Softwood Pine Timber',
    description: 'Lightweight and easy to work with softwood pine. Great for construction framing and DIY projects.',
    category: 'Timber',
    thickness: '50mm',
    grade: 'Standard',
    price: 2200,
    image: gallery4,
    features: ['Softwood', 'Kiln dried', 'Easy to work', 'Cost effective']
  },
  {
    id: 5,
    name: 'Bamboo Plywood',
    description: 'Eco-friendly bamboo plywood with exceptional strength and sustainability. Beautiful natural appearance.',
    category: 'Plywood',
    thickness: '15mm',
    grade: 'A-B',
    price: 4000,
    image: gallery1,
    features: ['Sustainable', 'Eco-friendly', 'High strength', 'Beautiful grain']
  },
  {
    id: 6,
    name: 'Walnut Hardwood',
    description: 'Premium walnut hardwood with rich chocolate color and beautiful figuring. Perfect for luxury furniture.',
    category: 'Timber',
    thickness: '30mm',
    grade: 'Premium',
    price: 9200,
    image: gallery3,
    features: ['Luxury hardwood', 'Rich color', 'Fine grain', 'Premium grade']
  }
]

export default products