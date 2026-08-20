import { Product } from '../types';

export const FINISH_OAK = { id: 'finish-oak', name: 'Natural White Oak', colorHex: '#C5A880', woodType: 'American White Oak' };
export const FINISH_WALNUT = { id: 'finish-walnut', name: 'Smoked Walnut', colorHex: '#4A3525', woodType: 'FSC Solid Walnut' };
export const FINISH_TEAK = { id: 'finish-teak', name: 'Natural Burmese Teak', colorHex: '#8C5E32', woodType: 'Matured Teak Wood' };
export const FINISH_CHARCOAL = { id: 'finish-charcoal', name: 'Charcoal Ash', colorHex: '#252321', woodType: 'Ebonized Ash' };
export const FINISH_LINEN_OAT = { id: 'finish-linen-oat', name: 'Warm Oat Linen', colorHex: '#E0D6C3', woodType: 'Belgian Organic Linen' };
export const FINISH_BOUCLE_CREAM = { id: 'finish-boucle', name: 'Raw Bouclé Cream', colorHex: '#EDE6DA', woodType: 'Textured Wool-Linen Blend' };
export const FINISH_LEATHER_COGNAC = { id: 'finish-leather-cognac', name: 'Cognac Saddle Leather', colorHex: '#7C431D', woodType: 'Full-Grain Vegetable Tanned' };

export const PRODUCTS: Product[] = [
  // LIVING ROOM
  {
    id: 'sg-01',
    slug: 'the-arlo-lounge-chair',
    name: 'The Arlo Lounge Chair',
    tagline: 'Sculptural low-slung comfort with exposed tenon joinery.',
    category: 'Living Room',
    price: 48500,
    originalPrice: 54000,
    inStock: true,
    featured: true,
    isNew: true,
    materials: ['Solid White Oak', 'Belgian Textured Linen', 'High-Resilience Latex Foam'],
    primaryMaterial: 'Solid White Oak & Linen',
    finishOptions: [FINISH_OAK, FINISH_WALNUT, FINISH_CHARCOAL],
    defaultFinishId: 'finish-oak',
    dimensions: {
      widthCm: 78,
      depthCm: 84,
      heightCm: 76,
      seatHeightCm: 41,
      widthInches: '30.7"',
      depthInches: '33.1"',
      heightInches: '29.9"',
      weightKg: 18.5
    },
    description: 'The Arlo Lounge Chair balances architectural precision with deep, restorative posture. Hand-shaped solid timber arms transition seamlessly into traditional mortise-and-tenon frame joinery, while plush double-cushioned Belgian linen cushions invite quiet contemplation.',
    craftsmanshipHighlights: [
      'Individually hand-planed solid timber frame with continuous wood grain flow',
      'Traditional mortise and tenon joinery with zero visible mechanical fasteners',
      'Finished with a low-VOC, breathable organic wax-oil that preserves natural wood pores',
      'Removable, dry-cleanable heavyweight linen covers with concealed Japanese YKK zippers'
    ],
    careInstructions: [
      'Wipe timber frame with a soft, dry cotton cloth along the grain direction',
      'Avoid placing directly in prolonged midday tropical sun to preserve natural patina',
      'Spot clean linen with mild pH-neutral soap foam and distilled water'
    ],
    deliveryInfo: {
      leadTime: '3–5 working days in Dhaka; 5–7 days nationwide Bangladesh',
      assembly: 'Delivered fully assembled with white-glove unboxing and placement',
      shippingBangladesh: 'Complimentary white-glove courier across all 64 districts'
    },
    warrantyInfo: '10-Year Structural Frame Warranty & 3-Year Upholstery Warranty',
    images: {
      primary: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      joineryMacro: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Living Room', 'Reading Nook', 'Master Suite', 'Executive Office']
  },
  {
    id: 'sg-02',
    slug: 'the-solis-three-seater-sofa',
    name: 'The Solis 3-Seater Sofa',
    tagline: 'Deep architecture meets understated, cloud-like luxury.',
    category: 'Living Room',
    price: 135000,
    inStock: true,
    featured: true,
    materials: ['Kiln-Dried Solid Teak Sub-frame', 'Raw Bouclé Weave', 'Feather-Down Blend Core'],
    primaryMaterial: 'Burmese Teak & Bouclé',
    finishOptions: [FINISH_BOUCLE_CREAM, FINISH_LINEN_OAT],
    defaultFinishId: 'finish-boucle',
    dimensions: {
      widthCm: 230,
      depthCm: 98,
      heightCm: 78,
      seatHeightCm: 42,
      widthInches: '90.5"',
      depthInches: '38.6"',
      heightInches: '30.7"',
      weightKg: 64.0
    },
    description: 'Designed as the serene anchor of the contemporary home, The Solis Sofa presents balanced horizontal lines and generous seat depth. Constructed over a kiln-dried solid hardwood internal chassis with multi-layer organic cushioning that maintains its tailored structure over decades of use.',
    craftsmanshipHighlights: [
      'Internal frame engineered from sustainably sourced, 15-year kiln-dried hardwood',
      'Eight-way hand-tied spring suspension system for silent, lifelong resilience',
      'Cushions layered with dual-density high-resilience foam and hypoallergenic down blend',
      'Concealed recessed solid timber base creating a floating architectural shadow line'
    ],
    careInstructions: [
      'Gently vacuum upholstery weekly using a soft bristle brush attachment',
      'Rotate and fluff seat cushions monthly to ensure even settling',
      'Professional dry cleaning recommended for full seasonal refreshes'
    ],
    deliveryInfo: {
      leadTime: '5–7 working days in Dhaka Metropolitan; 7–10 days Nationwide',
      assembly: 'Delivered in custom protective wooden crate; assembled by master technicians',
      shippingBangladesh: 'Complimentary two-person room-of-choice placement nationwide'
    },
    warrantyInfo: '15-Year Internal Frame Guarantee & 5-Year Suspension Guarantee',
    images: {
      primary: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Living Room', 'Great Room', 'Penthouse Lounge']
  },
  {
    id: 'sg-03',
    slug: 'the-forma-coffee-table',
    name: 'The Forma Coffee Table',
    tagline: 'Solid monolithic timber with bullnose chamfered edging.',
    category: 'Living Room',
    price: 38000,
    inStock: true,
    featured: true,
    materials: ['Quarter-Sawn White Oak', 'Organic Hardwax Oil'],
    primaryMaterial: 'Solid White Oak',
    finishOptions: [FINISH_OAK, FINISH_WALNUT],
    defaultFinishId: 'finish-oak',
    dimensions: {
      widthCm: 120,
      depthCm: 70,
      heightCm: 38,
      widthInches: '47.2"',
      depthInches: '27.6"',
      heightInches: '15.0"',
      weightKg: 26.0
    },
    description: 'A study in calm geometric reduction. The Forma Coffee Table celebrates continuous natural grain patterns with softly radiused pillared legs that nest snugly beneath an expansive solid timber top.',
    craftsmanshipHighlights: [
      'Milled from a single batch of select-grade kiln-dried white oak',
      'Hand-sanded across 4 progressive grits for a velvety, tactile finish',
      'Internal expansion cleats accommodate natural humidity changes without warping'
    ],
    careInstructions: [
      'Use coasters under warm tea/coffee cups to preserve natural wax coating',
      'Clean spills immediately with a damp microfiber cloth'
    ],
    deliveryInfo: {
      leadTime: '3–5 working days nationwide',
      assembly: 'Pre-assembled solid construction',
      shippingBangladesh: 'Complimentary nationwide courier delivery'
    },
    warrantyInfo: '10-Year Structural Timber Warranty',
    images: {
      primary: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Living Room', 'Lounge', 'Office Waiting Salon']
  },
  {
    id: 'sg-04',
    slug: 'the-kanso-accent-table',
    name: 'The Kanso Side Table',
    tagline: 'Turned architectural pedestal with recessed shadow gap.',
    category: 'Living Room',
    price: 18500,
    inStock: true,
    featured: false,
    materials: ['Solid Smoked Ash Wood', 'Brushed Brass Footing'],
    primaryMaterial: 'Solid Ash & Cast Brass',
    finishOptions: [FINISH_CHARCOAL, FINISH_WALNUT, FINISH_OAK],
    defaultFinishId: 'finish-charcoal',
    dimensions: {
      widthCm: 45,
      depthCm: 45,
      heightCm: 52,
      widthInches: '17.7"',
      depthInches: '17.7"',
      heightInches: '20.5"',
      weightKg: 9.2
    },
    description: 'A sculptural side companion. Lathe-turned from solid seasoned ash and grounded with a weighted brass pedestal collar.',
    craftsmanshipHighlights: [
      'Precision lathe-turned timber pillar',
      'Solid heavy brass weight collar providing tip-resistant stability'
    ],
    careInstructions: ['Wipe clean with a soft dry cloth; avoid harsh chemical sprays'],
    deliveryInfo: {
      leadTime: '2–4 working days nationwide',
      assembly: 'Ready to place right out of the box',
      shippingBangladesh: 'Standard secure courier delivery across Bangladesh'
    },
    warrantyInfo: '5-Year Structural Warranty',
    images: {
      primary: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Living Room', 'Bedside', 'Lounge']
  },

  // DINING
  {
    id: 'sg-05',
    slug: 'the-noma-dining-table',
    name: 'The Noma Dining Table',
    tagline: 'Grand architectural trestle table for 8–10 people.',
    category: 'Dining',
    price: 112000,
    inStock: true,
    featured: true,
    materials: ['FSC Solid White Oak Planks', 'Mortise & Tenon Keyed Trestles'],
    primaryMaterial: 'Solid White Oak',
    finishOptions: [FINISH_OAK, FINISH_WALNUT, FINISH_TEAK],
    defaultFinishId: 'finish-oak',
    dimensions: {
      widthCm: 240,
      depthCm: 100,
      heightCm: 76,
      widthInches: '94.5"',
      depthInches: '39.4"',
      heightInches: '29.9"',
      weightKg: 78.0
    },
    description: 'The centerpiece of shared culinary gatherings. The Noma Dining Table features bookmatched solid timber planks with through-tenon structural keys that honor traditional carpentry heritage.',
    craftsmanshipHighlights: [
      'Bookmatched European oak top with natural cathedral grain patterns',
      'Structural through-tenons wedged with contrasting smoked timber keys',
      'Food-safe, zero-VOC matte ceramic nano-oil sealant resisting heat and water marks'
    ],
    careInstructions: [
      'Wipe down after meals with warm damp microfiber cloth',
      'Reapply organic maintenance wax once every 18 months for lifelong lustrous glow'
    ],
    deliveryInfo: {
      leadTime: '5–8 working days across Bangladesh',
      assembly: 'Assembled in your dining room by trained Simple Grain technicians',
      shippingBangladesh: 'Complimentary nationwide delivery'
    },
    warrantyInfo: '20-Year Heirloom Timber Guarantee',
    images: {
      primary: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Dining Room', 'Open Plan Great Room', 'Conference Suite']
  },
  {
    id: 'sg-06',
    slug: 'the-lyra-dining-chair',
    name: 'The Lyra Dining Chair',
    tagline: 'Steam-bent solid timber backrest with natural paper cord seat.',
    category: 'Dining',
    price: 24500,
    inStock: true,
    featured: true,
    materials: ['Solid Ash Wood', 'Danish Weave Natural Paper Cord'],
    primaryMaterial: 'Solid Ash & Paper Cord',
    finishOptions: [FINISH_OAK, FINISH_CHARCOAL, FINISH_WALNUT],
    defaultFinishId: 'finish-oak',
    dimensions: {
      widthCm: 54,
      depthCm: 52,
      heightCm: 79,
      seatHeightCm: 45,
      widthInches: '21.3"',
      depthInches: '20.5"',
      heightInches: '31.1"',
      weightKg: 6.8
    },
    description: 'An ergonomic marvel designed for multi-hour dinner conversations. The single continuous steam-bent crest rail cradles the lumbar spine, while 120 meters of hand-woven cord create a breathable, forgiving seat.',
    craftsmanshipHighlights: [
      'Continuous steam-bent solid wood back rail with zero joints in the curvature',
      'Hand-woven three-ply Danish paper cord seat by master weavers (takes 4 hours per chair)',
      'Featherlight yet rated for 150kg load with reinforced finger-jointed sub-frame'
    ],
    careInstructions: [
      'Gently brush woven cord with a soft brush; avoid saturating cord with liquids'
    ],
    deliveryInfo: {
      leadTime: '3–5 working days nationwide',
      assembly: 'Pre-assembled single unit structure',
      shippingBangladesh: 'Complimentary shipping when ordered in pairs or sets of 4/6'
    },
    warrantyInfo: '7-Year Frame & Weave Warranty',
    images: {
      primary: 'https://images.unsplash.com/photo-1580481077195-c3a821a5060f?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Dining Room', 'Kitchen Island', 'Desk Seating']
  },
  {
    id: 'sg-07',
    slug: 'the-tate-dining-bench',
    name: 'The Tate Dining Bench',
    tagline: 'Versatile low timber bench with rounded tapered legs.',
    category: 'Dining',
    price: 36000,
    inStock: true,
    featured: false,
    materials: ['Solid White Oak', 'Reinforced Timber Stretchers'],
    primaryMaterial: 'Solid White Oak',
    finishOptions: [FINISH_OAK, FINISH_WALNUT],
    defaultFinishId: 'finish-oak',
    dimensions: {
      widthCm: 180,
      depthCm: 38,
      heightCm: 45,
      widthInches: '70.9"',
      depthInches: '15.0"',
      heightInches: '17.7"',
      weightKg: 21.0
    },
    description: 'An informal yet disciplined dining companion. Slides cleanly under the Noma Dining Table to maintain open sightlines across modern apartments.',
    craftsmanshipHighlights: [
      'Subtle ergonomic dished top profile for seated comfort without cushions',
      'Splay-angled tapered legs secured with mortise tenons and brass stabilizer dowels'
    ],
    careInstructions: ['Wipe clean with a damp cloth; polish with dry cotton cloth'],
    deliveryInfo: {
      leadTime: '3–5 working days nationwide',
      assembly: 'Simple tool-free leg attachment with precision threaded steel inserts',
      shippingBangladesh: 'Complimentary nationwide delivery'
    },
    warrantyInfo: '10-Year Structural Timber Warranty',
    images: {
      primary: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Dining Room', 'Entryway Foyer', 'Foot of Bed']
  },

  // BEDROOM
  {
    id: 'sg-08',
    slug: 'the-haven-bed',
    name: 'The Haven Platform Bed',
    tagline: 'Floating architectural frame with cantilevered headboard.',
    category: 'Bedroom',
    price: 142000,
    inStock: true,
    featured: true,
    isNew: true,
    materials: ['Solid Burmese Teak', 'Organic Linen Upholstered Headboard Cushions', 'Hardwood Slats'],
    primaryMaterial: 'Solid Teak & Belgian Linen',
    finishOptions: [FINISH_TEAK, FINISH_WALNUT, FINISH_OAK],
    defaultFinishId: 'finish-teak',
    dimensions: {
      widthCm: 195,
      depthCm: 215,
      heightCm: 95,
      seatHeightCm: 28,
      widthInches: '76.8"',
      depthInches: '84.6"',
      heightInches: '37.4"',
      weightKg: 85.0
    },
    description: 'The sanctuary centerpiece. The Haven Platform Bed elevates rest with an intentionally low profile, floating perimeter ledge, and two angled linen-wrapped pillow bolsters suspended from brass brackets on the headboard.',
    craftsmanshipHighlights: [
      'Concealed recessed pedestal base creates a weightless floating aesthetic',
      'Solid timber side rails with continuous corner waterfall grain match',
      'Zero-creak interlocking German hardware system with solid beech sprung slats',
      'Detachable linen headboard cushions filled with natural kapok and wool'
    ],
    careInstructions: [
      'Maintain wood with organic beeswax paste every 1–2 years',
      'Fluff headboard bolsters regularly and spot clean linen with mild wool wash'
    ],
    deliveryInfo: {
      leadTime: '7–10 working days nationwide',
      assembly: 'Complimentary in-room setup and mattress positioning by Simple Grain white-glove crew',
      shippingBangladesh: 'Nationwide delivery included with every bed order'
    },
    warrantyInfo: '15-Year Solid Wood Frame Guarantee',
    images: {
      primary: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Master Bedroom', 'Suite', 'Architectural Residence']
  },
  {
    id: 'sg-09',
    slug: 'the-sera-nightstand',
    name: 'The Sera Bedside Table',
    tagline: 'Quiet drawer with soft-close wood glides and open alcove.',
    category: 'Bedroom',
    price: 26500,
    inStock: true,
    featured: false,
    materials: ['Solid White Oak', 'Hand-Cut Dovetail Joints', 'Waxed Cedar Drawer Lining'],
    primaryMaterial: 'Solid White Oak',
    finishOptions: [FINISH_OAK, FINISH_WALNUT, FINISH_CHARCOAL],
    defaultFinishId: 'finish-oak',
    dimensions: {
      widthCm: 50,
      depthCm: 42,
      heightCm: 48,
      widthInches: '19.7"',
      depthInches: '16.5"',
      heightInches: '18.9"',
      weightKg: 14.5
    },
    description: 'Designed for nocturnal stillness. Features a whisper-smooth wooden-glide drawer lined with aromatic cedar, topped with a radiused tray edge to prevent objects from slipping off in the dark.',
    craftsmanshipHighlights: [
      'Hand-cut half-blind dovetails on all four drawer corners',
      'Traditional wooden runners waxed with beeswax for silent, lifetime operation',
      'Aromatic Himalayan cedar bottom panel naturally repels dust and moths'
    ],
    careInstructions: ['Dust with soft cloth; re-wax wooden runner glides once yearly'],
    deliveryInfo: {
      leadTime: '3–5 working days nationwide',
      assembly: 'Pre-assembled monolithic piece',
      shippingBangladesh: 'Complimentary shipping across Bangladesh'
    },
    warrantyInfo: '10-Year Cabinetry Warranty',
    images: {
      primary: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Bedroom', 'Guest Suite']
  },
  {
    id: 'sg-10',
    slug: 'the-valen-six-drawer-dresser',
    name: 'The Valen 6-Drawer Dresser',
    tagline: 'Horizontal bedroom credenza with continuous grain drawer fronts.',
    category: 'Bedroom',
    price: 92000,
    inStock: true,
    featured: true,
    materials: ['Solid American Walnut', 'Solid Brass Integrated Finger Pulls'],
    primaryMaterial: 'Solid American Walnut',
    finishOptions: [FINISH_WALNUT, FINISH_OAK],
    defaultFinishId: 'finish-walnut',
    dimensions: {
      widthCm: 160,
      depthCm: 50,
      heightCm: 80,
      widthInches: '63.0"',
      depthInches: '19.7"',
      heightInches: '31.5"',
      weightKg: 68.0
    },
    description: 'A masterpiece of wood selection. All six drawer fronts are precision-sliced from a singular solid walnut board, allowing the rippling grain pattern to cascade unbroken across the entire facade.',
    craftsmanshipHighlights: [
      'Single-board continuous waterfall grain matching across all 6 drawer fronts',
      'Solid brass J-pulls recessed flush with the top of each drawer',
      'Concealed soft-close undermount Austrian Blum runners'
    ],
    careInstructions: ['Wipe timber surfaces with microfiber cloth; clean brass pulls with dry felt'],
    deliveryInfo: {
      leadTime: '5–8 working days nationwide',
      assembly: 'Pre-assembled; anti-tip wall anchoring hardware included and installed',
      shippingBangladesh: 'Complimentary two-person room delivery nationwide'
    },
    warrantyInfo: '10-Year Craftsmanship Guarantee',
    images: {
      primary: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Master Bedroom', 'Walk-in Dressing Suite']
  },

  // OFFICE
  {
    id: 'sg-11',
    slug: 'the-kura-executive-desk',
    name: 'The Kura Executive Desk',
    tagline: 'Refined work table with integrated leather blotter and cable recess.',
    category: 'Office',
    price: 88000,
    inStock: true,
    featured: true,
    materials: ['Solid Walnut Timber', 'Full-Grain Tuscan Saddle Leather', 'Concealed Magnetic Cable Channel'],
    primaryMaterial: 'Solid Walnut & Leather',
    finishOptions: [FINISH_WALNUT, FINISH_OAK, FINISH_CHARCOAL],
    defaultFinishId: 'finish-walnut',
    dimensions: {
      widthCm: 175,
      depthCm: 80,
      heightCm: 75,
      widthInches: '68.9"',
      depthInches: '31.5"',
      heightInches: '29.5"',
      weightKg: 52.0
    },
    description: 'An antidote to cluttered workspaces. The Kura Desk combines hand-planed timber bevels with a seamless inlaid Italian saddle leather writing pad and a magnetic wooden hatch that discreetly hides power supplies and cords.',
    craftsmanshipHighlights: [
      'Flush-inlaid hand-burnished vegetable tanned saddle leather pad',
      'Solid timber cable conduit with magnetic touch release door',
      'Slim drawer with felt-lined stationary compartments carved from solid oak'
    ],
    careInstructions: [
      'Condition leather desk pad with natural beeswax balm twice a year',
      'Keep timber surfaces free of standing liquids'
    ],
    deliveryInfo: {
      leadTime: '4–7 working days nationwide',
      assembly: 'White-glove assembly and cable management setup by Simple Grain technician',
      shippingBangladesh: 'Complimentary nationwide delivery'
    },
    warrantyInfo: '10-Year Structural Desk Guarantee',
    images: {
      primary: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Executive Study', 'Home Studio', 'Architectural Office']
  },
  {
    id: 'sg-12',
    slug: 'the-verso-desk-chair',
    name: 'The Verso Desk Chair',
    tagline: 'Articulated timber swivel chair with cushioned lumbar support.',
    category: 'Office',
    price: 52000,
    inStock: true,
    featured: false,
    materials: ['Solid White Oak Shell', 'Cognac Saddle Leather', 'Gas-Lift Brass Mechanism'],
    primaryMaterial: 'Solid Oak & Leather',
    finishOptions: [FINISH_LEATHER_COGNAC, FINISH_CHARCOAL],
    defaultFinishId: 'finish-leather-cognac',
    dimensions: {
      widthCm: 62,
      depthCm: 62,
      heightCm: 88,
      seatHeightCm: 46,
      widthInches: '24.4"',
      depthInches: '24.4"',
      heightInches: '34.6"',
      weightKg: 16.0
    },
    description: 'Blending organic carpentry with smooth 360-degree silent swivel. The molded timber shell is calibrated for all-day upright posture without clinical office aesthetics.',
    craftsmanshipHighlights: [
      'Custom calibrated smooth tilt and swivel column tested to 100,000 cycles',
      'Hand-stitched perimeter seam on cognac leather upholstery'
    ],
    careInstructions: ['Wipe leather with soft cloth; oil swivel mechanism annually if needed'],
    deliveryInfo: {
      leadTime: '3–5 working days nationwide',
      assembly: 'Pre-assembled and ready to use',
      shippingBangladesh: 'Complimentary shipping across Bangladesh'
    },
    warrantyInfo: '5-Year Mechanical & Frame Warranty',
    images: {
      primary: 'https://images.unsplash.com/photo-1580481077195-c3a821a5060f?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Home Office', 'Study', 'Creative Studio']
  },

  // STORAGE
  {
    id: 'sg-13',
    slug: 'the-elio-sideboard',
    name: 'The Elio Credenza',
    tagline: 'Fluted timber sliding doors with soft internal LED channel.',
    category: 'Storage',
    price: 108000,
    inStock: true,
    featured: true,
    isNew: true,
    materials: ['Solid Quarter-Sawn Teak', 'Fluted Tambour Sliding Slats', 'Cast Brass Legs'],
    primaryMaterial: 'Solid Teak & Cast Brass',
    finishOptions: [FINISH_TEAK, FINISH_WALNUT, FINISH_OAK],
    defaultFinishId: 'finish-teak',
    dimensions: {
      widthCm: 200,
      depthCm: 48,
      heightCm: 72,
      widthInches: '78.7"',
      depthInches: '18.9"',
      heightInches: '28.3"',
      weightKg: 72.0
    },
    description: 'The Elio Credenza transforms storage into an architectural statement. Individual solid wood tambours glide smoothly along curved tracks, vanishing effortlessly into the cabinet interior to reveal adjustable shelves and cord pass-throughs.',
    craftsmanshipHighlights: [
      'Over 90 individual precision-milled solid wood fluted tambours mounted to organic canvas backing',
      'Solid cast brass legs hand-patinated to a warm brushed antique bronze sheen',
      'Ventilated back panel with cable apertures for media or audio equipment'
    ],
    careInstructions: [
      'Clean fluted slats with vacuum dusting brush',
      'Apply organic wood oil every two years'
    ],
    deliveryInfo: {
      leadTime: '5–8 working days nationwide',
      assembly: 'Delivered pre-assembled; legs installed by delivery crew',
      shippingBangladesh: 'Complimentary nationwide white-glove placement'
    },
    warrantyInfo: '15-Year Structural & Tambour Track Warranty',
    images: {
      primary: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Living Room', 'Dining Room', 'Media Room']
  },
  {
    id: 'sg-14',
    slug: 'the-column-bookshelf',
    name: 'The Column Open Bookcase',
    tagline: 'Modular architectural shelving with staggered timber dividers.',
    category: 'Storage',
    price: 84000,
    inStock: true,
    featured: false,
    materials: ['Solid White Oak', 'Solid Brass Alignment Pins'],
    primaryMaterial: 'Solid White Oak',
    finishOptions: [FINISH_OAK, FINISH_WALNUT],
    defaultFinishId: 'finish-oak',
    dimensions: {
      widthCm: 140,
      depthCm: 36,
      heightCm: 190,
      widthInches: '55.1"',
      depthInches: '14.2"',
      heightInches: '74.8"',
      weightKg: 58.0
    },
    description: 'An open-backed architectural divider that allows light to filter through while showcasing curated objects, books, and ceramic vessels.',
    craftsmanshipHighlights: [
      'Staggered vertical partitions engineered to maximize rigidity without a backboard',
      'Solid brass dowel joinery at all structural intersection points'
    ],
    careInstructions: ['Dust regularly with dry microfiber cloth'],
    deliveryInfo: {
      leadTime: '5–7 working days nationwide',
      assembly: 'Full assembly and wall tethering provided on site',
      shippingBangladesh: 'Complimentary nationwide delivery'
    },
    warrantyInfo: '10-Year Structural Timber Guarantee',
    images: {
      primary: 'https://images.unsplash.com/photo-1594698316135-21524fa37ceb?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Living Room', 'Study', 'Library', 'Room Divider']
  },

  // ADDITIONAL LIVING / ACCENTS
  {
    id: 'sg-15',
    slug: 'the-milo-armchair',
    name: 'The Milo Bouclé Armchair',
    tagline: 'Curved cocoon silhouette in tactile organic bouclé.',
    category: 'Living Room',
    price: 56000,
    inStock: true,
    featured: false,
    materials: ['Textured Cream Bouclé', 'Kiln-Dried Hardwood Frame', 'High-Density Latex Core'],
    primaryMaterial: 'Textured Bouclé & Hardwood',
    finishOptions: [FINISH_BOUCLE_CREAM, FINISH_LINEN_OAT],
    defaultFinishId: 'finish-boucle',
    dimensions: {
      widthCm: 85,
      depthCm: 88,
      heightCm: 74,
      seatHeightCm: 40,
      widthInches: '33.5"',
      depthInches: '34.6"',
      heightInches: '29.1"',
      weightKg: 24.0
    },
    description: 'An embracing sculptural silhouette. Designed with a continuous barrel curve that swaddles the body in plush, tactile comfort.',
    craftsmanshipHighlights: [
      'Seamless multi-curved upholstery tailoring with zero puckering',
      'Subtle internal timber base weighted for solid grounding'
    ],
    careInstructions: ['Vacuum lightly with soft upholstery brush; professional clean recommended'],
    deliveryInfo: {
      leadTime: '3–5 working days nationwide',
      assembly: 'Pre-assembled piece',
      shippingBangladesh: 'Complimentary white-glove courier delivery'
    },
    warrantyInfo: '5-Year Frame & Cushioning Warranty',
    images: {
      primary: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Living Room', 'Bedroom Corner', 'Lounge']
  },
  {
    id: 'sg-16',
    slug: 'the-nord-sideboard-compact',
    name: 'The Nord Compact Cabinet',
    tagline: 'Two-door minimal cabinet with brass push-latches.',
    category: 'Storage',
    price: 54000,
    inStock: true,
    featured: false,
    materials: ['Solid White Oak', 'Internal Adjustable Timber Shelving'],
    primaryMaterial: 'Solid White Oak',
    finishOptions: [FINISH_OAK, FINISH_CHARCOAL],
    defaultFinishId: 'finish-oak',
    dimensions: {
      widthCm: 110,
      depthCm: 45,
      heightCm: 85,
      widthInches: '43.3"',
      depthInches: '17.7"',
      heightInches: '33.5"',
      weightKg: 42.0
    },
    description: 'Proportioned specifically for compact urban apartments in Dhaka and Chittagong. Offers generous hidden storage behind two minimalist bookmatched wood doors.',
    craftsmanshipHighlights: [
      'Magnetic touch-latch mechanisms eliminating external hardware',
      'Solid timber plinth base with leveling feet for uneven flooring'
    ],
    careInstructions: ['Clean with a soft dry cloth; avoid abrasive sponges'],
    deliveryInfo: {
      leadTime: '3–5 working days nationwide',
      assembly: 'Pre-assembled piece',
      shippingBangladesh: 'Complimentary nationwide delivery'
    },
    warrantyInfo: '10-Year Cabinetry Guarantee',
    images: {
      primary: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Entryway', 'Dining Room', 'Compact Living']
  },
  {
    id: 'sg-17',
    slug: 'the-astrid-round-dining-table',
    name: 'The Astrid Round Dining Table',
    tagline: 'Circular pedestal table in solid smoked walnut.',
    category: 'Dining',
    price: 86000,
    inStock: true,
    featured: false,
    materials: ['Solid American Walnut', 'Fluted Pedestal Column'],
    primaryMaterial: 'Solid American Walnut',
    finishOptions: [FINISH_WALNUT, FINISH_OAK],
    defaultFinishId: 'finish-walnut',
    dimensions: {
      widthCm: 135,
      depthCm: 135,
      heightCm: 76,
      widthInches: '53.1"',
      depthInches: '53.1"',
      heightInches: '29.9"',
      weightKg: 54.0
    },
    description: 'Encouraging intimate, egalitarian conversation. The circular top comfortably seats 4–6 without intrusive perimeter legs.',
    craftsmanshipHighlights: [
      'Radial bookmatched walnut veneer top with 8mm solid perimeter timber bumper',
      'Weighted steel sub-plate inside pedestal prevents any tipping or wobble'
    ],
    careInstructions: ['Wipe clean with a damp cloth; polish with dry cotton cloth'],
    deliveryInfo: {
      leadTime: '4–6 working days nationwide',
      assembly: 'Two-piece assembly performed on-site by Simple Grain team',
      shippingBangladesh: 'Complimentary nationwide delivery'
    },
    warrantyInfo: '10-Year Heirloom Timber Guarantee',
    images: {
      primary: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Breakfast Nook', 'Apartment Dining', 'Studio Kitchen']
  },
  {
    id: 'sg-18',
    slug: 'the-calm-credenza',
    name: 'The Calm Media Console',
    tagline: 'Low-profile solid oak TV & media console with acoustic cloth doors.',
    category: 'Living Room',
    price: 68000,
    inStock: true,
    featured: false,
    materials: ['Solid White Oak', 'Sound-Transparent Natural Linen Weave Panels'],
    primaryMaterial: 'Solid White Oak & Linen',
    finishOptions: [FINISH_OAK, FINISH_WALNUT],
    defaultFinishId: 'finish-oak',
    dimensions: {
      widthCm: 180,
      depthCm: 45,
      heightCm: 48,
      widthInches: '70.9"',
      depthInches: '17.7"',
      heightInches: '18.9"',
      weightKg: 48.0
    },
    description: 'Designed specifically to soften living room technology. Linen-framed drop-down doors allow remote IR signals and audio to pass freely while keeping cables and black boxes out of sight.',
    craftsmanshipHighlights: [
      'Acoustic linen panels permit audio soundbar resonance and IR remote pass-through',
      'Integrated rear ventilation cooling ports prevent electronics from overheating'
    ],
    careInstructions: ['Dust wood with soft cloth; lightly vacuum linen weave with bristle brush'],
    deliveryInfo: {
      leadTime: '3–6 working days nationwide',
      assembly: 'Pre-assembled monolithic console',
      shippingBangladesh: 'Complimentary nationwide delivery'
    },
    warrantyInfo: '10-Year Cabinetry Guarantee',
    images: {
      primary: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
      lifestyle: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      detailCloseUp: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80'
    },
    roomSuitability: ['Living Room', 'Media Room', 'Lounge']
  }
];

export const CATEGORIES: { name: string; slug: string; image: string; description: string; count: number }[] = [
  {
    name: 'Living Room',
    slug: 'living-room',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    description: 'Sculptural lounge seating, solid coffee tables, and architectural consoles designed for quiet, unhurried rest.',
    count: 7
  },
  {
    name: 'Dining',
    slug: 'dining',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    description: 'Substantial solid timber tables, woven paper cord chairs, and benches that elevate everyday meals into shared rituals.',
    count: 4
  },
  {
    name: 'Bedroom',
    slug: 'bedroom',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    description: 'Low-profile floating platform beds, linen bolsters, and quiet cedar-lined nightstands crafted for restorative sleep.',
    count: 3
  },
  {
    name: 'Office',
    slug: 'office',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    description: 'Executive desks with concealed cable architecture and leather touchpoints for focused, contemplative work.',
    count: 2
  },
  {
    name: 'Storage',
    slug: 'storage',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
    description: 'Fluted tambour credenzas, open book columns, and quiet sideboards that organize living with disciplined restraint.',
    count: 3
  }
];
