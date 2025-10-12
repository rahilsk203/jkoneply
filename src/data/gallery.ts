export interface GalleryItem {
  id: number
  title: string
  description: string
  category: string
  image: string
}

const gallery: GalleryItem[] = [
  {
    id: 1,
    title: 'Modern Kitchen Cabinets',
    description: 'Custom birch plywood cabinets with natural finish',
    category: 'Cabinetry',
    image: '/src/assets/galleryImage/gallery1.jpg'
  },
  {
    id: 2,
    title: 'Outdoor Decking',
    description: 'Pressure-treated pine timber for backyard deck',
    category: 'Construction',
    image: '/src/assets/galleryImage/gallery2.jpg'
  },
  {
    id: 3,
    title: 'Custom Dining Table',
    description: 'Solid oak dining table with live edge design',
    category: 'Furniture',
    image: '/src/assets/galleryImage/gallery3.jpg'
  },
  {
    id: 4,
    title: 'Bathroom Vanity',
    description: 'Marine-grade plywood vanity for wet environment',
    category: 'Cabinetry',
    image: '/src/assets/galleryImage/gallery4.jpg'
  },
  {
    id: 5,
    title: 'Flooring Installation',
    description: 'Walnut hardwood flooring with natural finish',
    category: 'Installation',
    image: '/src/assets/galleryImage/gallery1.jpg'
  },
  {
    id: 6,
    title: 'Custom Shelving',
    description: 'Bamboo plywood floating shelves with hidden brackets',
    category: 'Furniture',
    image: '/src/assets/galleryImage/gallery2.jpg'
  },
  {
    id: 7,
    title: 'Office Desk',
    description: 'Minimalist desk made from premium birch plywood',
    category: 'Furniture',
    image: '/src/assets/galleryImage/gallery3.jpg'
  },
  {
    id: 8,
    title: 'Garden Shed',
    description: 'Pine timber construction for outdoor storage',
    category: 'Construction',
    image: '/src/assets/galleryImage/gallery4.jpg'
  }
]

export default gallery