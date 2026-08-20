export type Category = 'All' | 'Living Room' | 'Dining' | 'Bedroom' | 'Office' | 'Storage';

export interface FinishOption {
  id: string;
  name: string;
  colorHex: string;
  woodType: string;
  image?: string;
}

export interface Dimensions {
  widthCm: number;
  depthCm: number;
  heightCm: number;
  seatHeightCm?: number;
  widthInches: string;
  depthInches: string;
  heightInches: string;
  weightKg: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: Category;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  featured: boolean;
  isNew?: boolean;
  materials: string[];
  primaryMaterial: string;
  finishOptions: FinishOption[];
  defaultFinishId: string;
  dimensions: Dimensions;
  description: string;
  craftsmanshipHighlights: string[];
  careInstructions: string[];
  deliveryInfo: {
    leadTime: string;
    assembly: string;
    shippingBangladesh: string;
  };
  warrantyInfo: string;
  images: {
    primary: string;
    secondary: string;
    lifestyle: string;
    detailCloseUp: string;
    joineryMacro?: string;
  };
  roomSuitability: string[];
}

export interface CartItem {
  id: string; // unique item id (productId + finishId)
  product: Product;
  selectedFinish: FinishOption;
  quantity: number;
}

export interface WishlistItem {
  productId: string;
  addedAt: number;
}

export interface Hotspot {
  id: string;
  productId: string;
  productName: string;
  category: string;
  price: number;
  xPercent: number; // 0 to 100
  yPercent: number; // 0 to 100
  image: string;
}

export interface LookbookScene {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  locationContext: string;
  description: string;
  atmosphere: string;
  heroImage: string;
  secondaryImages: string[];
  featuredProductIds: string[];
  hotspots: Hotspot[];
  palette: string[];
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Interior' | 'Materials' | 'Design' | 'Living';
  readTime: string;
  publishDate: string;
  author: string;
  excerpt: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      image?: string;
      quote?: string;
    }[];
    conclusion: string;
  };
  coverImage: string;
  secondaryImage: string;
  featuredProductIds: string[];
}

export interface FilterState {
  category: Category;
  searchQuery: string;
  selectedMaterials: string[];
  priceRange: [number, number];
  inStockOnly: boolean;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest';
}

export type PageView = 
  | 'home'
  | 'collection'
  | 'product-detail'
  | 'craftsmanship'
  | 'lookbook'
  | 'about'
  | 'journal'
  | 'contact'
  | 'cart'
  | 'checkout'
  | 'visualizer';
