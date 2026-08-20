import { LookbookScene } from '../types';

export const LOOKBOOK_SCENES: LookbookScene[] = [
  {
    id: 'scene-01',
    slug: 'warm-minimalism-gulshan',
    title: 'Warm Minimalism',
    subtitle: 'Gulshan Residence, Dhaka',
    locationContext: 'Sun-drenched North Dhaka Penthouse overlooking serene greenery',
    description: 'An open-concept living pavilion where natural white oak, textured oatmeal linen, and raw lime-wash walls create an oasis of restorative calm high above the city.',
    atmosphere: 'Morning Daylight • Natural Oak • Tactile Linen • Minimalist Restraint',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80'
    ],
    featuredProductIds: ['sg-01', 'sg-02', 'sg-03', 'sg-04'],
    hotspots: [
      {
        id: 'hs-1',
        productId: 'sg-01',
        productName: 'The Arlo Lounge Chair',
        category: 'Living Room',
        price: 48500,
        xPercent: 28,
        yPercent: 62,
        image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'hs-2',
        productId: 'sg-02',
        productName: 'The Solis 3-Seater Sofa',
        category: 'Living Room',
        price: 135000,
        xPercent: 65,
        yPercent: 54,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'hs-3',
        productId: 'sg-03',
        productName: 'The Forma Coffee Table',
        category: 'Living Room',
        price: 38000,
        xPercent: 48,
        yPercent: 78,
        image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=400&q=80'
      }
    ],
    palette: ['#F5F2EB', '#C5A880', '#57524A', '#262421']
  },
  {
    id: 'scene-02',
    slug: 'modern-dining-baridhara',
    title: 'Modern Dining',
    subtitle: 'Baridhara Suite, Dhaka',
    locationContext: 'Architectural dining room designed for intentional hospitality',
    description: 'Centering the sculptural Noma dining table alongside hand-woven paper cord chairs. A space where family and guests linger long after dinner has ended.',
    atmosphere: 'Even Evening Light • Solid Trestles • Hand-Woven Cord • Ceramic Vessels',
    heroImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1600&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1580481077195-c3a821a5060f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80'
    ],
    featuredProductIds: ['sg-05', 'sg-06', 'sg-07', 'sg-13'],
    hotspots: [
      {
        id: 'hs-4',
        productId: 'sg-05',
        productName: 'The Noma Dining Table',
        category: 'Dining',
        price: 112000,
        xPercent: 52,
        yPercent: 58,
        image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'hs-5',
        productId: 'sg-06',
        productName: 'The Lyra Dining Chair',
        category: 'Dining',
        price: 24500,
        xPercent: 32,
        yPercent: 68,
        image: 'https://images.unsplash.com/photo-1580481077195-c3a821a5060f?auto=format&fit=crop&w=400&q=80'
      }
    ],
    palette: ['#EFEAE1', '#917558', '#4E3C2F', '#191816']
  },
  {
    id: 'scene-03',
    slug: 'the-calm-bedroom-banani',
    title: 'The Calm Bedroom',
    subtitle: 'Banani Residence',
    locationContext: 'Minimal master suite oriented toward morning sunlight',
    description: 'A sanctuary dedicated to regenerative rest. Grounded by the low-profile Haven Platform Bed in warm Burmese Teak with tactile Belgian linen bolster pillows.',
    atmosphere: 'Diffused Morning Ray • Burmese Teak • Pure Linen • Cedar Scent',
    heroImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80'
    ],
    featuredProductIds: ['sg-08', 'sg-09', 'sg-10'],
    hotspots: [
      {
        id: 'hs-6',
        productId: 'sg-08',
        productName: 'The Haven Platform Bed',
        category: 'Bedroom',
        price: 142000,
        xPercent: 55,
        yPercent: 62,
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80'
      },
      {
        id: 'hs-7',
        productId: 'sg-09',
        productName: 'The Sera Bedside Table',
        category: 'Bedroom',
        price: 26500,
        xPercent: 22,
        yPercent: 68,
        image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=400&q=80'
      }
    ],
    palette: ['#FDFBF7', '#8C5E32', '#A38053', '#38342F']
  },
  {
    id: 'scene-04',
    slug: 'work-refined-studio',
    title: 'Work, Refined',
    subtitle: 'Studio Pavilion, Dhanmondi',
    locationContext: 'Architectural study crafted for deep creative contemplation',
    description: 'Eliminating the harsh synthetic aesthetic of traditional offices. Solid American walnut, hand-burnished saddle leather, and disciplined cable concealment.',
    atmosphere: 'Contemplative Focus • American Walnut • Tuscan Saddle Leather',
    heroImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580481077195-c3a821a5060f?auto=format&fit=crop&w=1000&q=80'
    ],
    featuredProductIds: ['sg-11', 'sg-12', 'sg-14'],
    hotspots: [
      {
        id: 'hs-8',
        productId: 'sg-11',
        productName: 'The Kura Executive Desk',
        category: 'Office',
        price: 88000,
        xPercent: 46,
        yPercent: 65,
        image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=400&q=80'
      }
    ],
    palette: ['#FBF9F5', '#4A3525', '#7C431D', '#262421']
  }
];
