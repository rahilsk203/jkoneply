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
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Outdoor Decking',
    description: 'Pressure-treated pine timber for backyard deck',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1595535873420-a59a1b0c9a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Custom Dining Table',
    description: 'Solid oak dining table with live edge design',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1595412693485-7be58aef4e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Bathroom Vanity',
    description: 'Marine-grade plywood vanity for wet environment',
    category: 'Cabinetry',
    image: 'https://images.unsplash.com/photo-1600857062241-98c0a9ed8f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Flooring Installation',
    description: 'Walnut hardwood flooring with natural finish',
    category: 'Installation',
    image: 'https://images.unsplash.com/photo-1595535873420-a59a1b0c9a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Custom Shelving',
    description: 'Bamboo plywood floating shelves with hidden brackets',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1595412693485-7be58aef4e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    title: 'Office Desk',
    description: 'Minimalist desk made from premium birch plywood',
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1595535873420-a59a1b0c9a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    title: 'Garden Shed',
    description: 'Pine timber construction for outdoor storage',
    category: 'Construction',
    image: 'https://images.unsplash.com/photo-1600857062241-98c0a9ed8f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
]

export default gallery