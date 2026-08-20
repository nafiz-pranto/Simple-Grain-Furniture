import { JournalArticle } from '../types';

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'journal-01',
    slug: 'the-art-of-timeless-interiors',
    title: 'The Art of Timeless Interiors',
    category: 'Interior',
    readTime: '5 min read',
    publishDate: 'August 2026',
    author: 'Simple Grain Editorial',
    excerpt: 'Why the most enduring living spaces reject seasonal trends in favor of honest proportions, tactile materials, and spatial breathing room.',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=80',
    featuredProductIds: ['sg-01', 'sg-02', 'sg-03'],
    content: {
      intro: 'When we observe homes that feel just as compelling twenty years after their conception as on the day they were built, we discover a shared discipline: they were never designed to be fashionable. Instead, they were designed to be true.',
      sections: [
        {
          heading: '1. The Currency of Restraint',
          body: 'A home should never feel like a showroom catalog where every corner shouts for attention. Timelessness is born from intentional emptiness — the deliberate decision to allow generous negative space around an exceptional solid wood lounge chair or a hand-knotted wool rug. In high-density urban environments like Dhaka, visual calm becomes the ultimate luxury.',
          quote: '“True luxury in a modern home is not abundance; it is the absolute clarity of having only what is honest, useful, and deeply comforting.”'
        },
        {
          heading: '2. Proportions Over Novelty',
          body: 'Trends rely on exaggerated gestures — oversized neon forms or ephemeral synthetic finishes that quickly feel dated. Architectural furniture, by contrast, relies on timeless classical ratios: low horizontal sightlines, balanced seat-to-depth dimensions, and continuous material transitions that align harmoniously with the human body.',
          image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80'
        },
        {
          heading: '3. Materials That Tell the Truth',
          body: 'A veneer glued over particle board deteriorates with time. Solid timber, unlacquered brass, and heavyweight Belgian linen do something entirely different: they gather memories. Every soft contact, every ray of morning sun enriches the wood’s natural oils, cultivating a rich patina that cannot be manufactured overnight.'
        }
      ],
      conclusion: 'Designing a timeless interior is not about finishing a room in a single weekend. It is an evolving dialogue of curating pieces that you will cherish passing down to the next generation.'
    }
  },
  {
    id: 'journal-02',
    slug: 'how-to-choose-the-right-wood',
    title: 'How to Choose the Right Wood for Your Home',
    category: 'Materials',
    readTime: '6 min read',
    publishDate: 'July 2026',
    author: 'Materials & Timber Studio',
    excerpt: 'An architect’s guide to navigating Burmese Teak, White Oak, and American Walnut across tropical and modern climates.',
    coverImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80',
    featuredProductIds: ['sg-05', 'sg-08', 'sg-10'],
    content: {
      intro: 'Wood is not a static building block; it is an organic, living medium that breathes, expands, and reflects light according to its cellular grain structure.',
      sections: [
        {
          heading: 'Solid White Oak: The Modern Neutral',
          body: 'White oak features a tight, linear grain with subtle medullary rays that catch natural daylight. Its neutral biscuit-blonde undertone complements contemporary minimalist palettes, lime plasters, and brushed limestone tiles.',
          quote: '“White Oak brings an airy, Scandinavian clarity to high-ceilinged modern rooms.”'
        },
        {
          heading: 'Burmese Teak: The Resilient Heritage',
          body: 'Celebrated across South Asia for centuries, matured teak possesses natural high oil density and silica content that makes it exceptionally immune to tropical humidity shifts, monsoon moisture, and woodborers. Its golden amber warmth deepens into a radiant bronze luster.',
          image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80'
        },
        {
          heading: 'American Walnut: Quiet Drama & Gravitas',
          body: 'For spaces requiring intimacy, grounding, and depth, smoked American Walnut provides rich chocolate and espresso tones with swirling, marbled grain figures that immediately establish an executive presence.'
        }
      ],
      conclusion: 'When selecting timber, consider the direction of natural daylight in your room: south-facing rooms illuminate the amber depths of Teak, while northern light highlights the clean graphic geometry of White Oak.'
    }
  },
  {
    id: 'journal-03',
    slug: 'designing-a-calm-living-room',
    title: 'Designing a Calm Living Room: Architectural Proportions',
    category: 'Design',
    readTime: '4 min read',
    publishDate: 'June 2026',
    author: 'Spatial Architecture Team',
    excerpt: 'How to arrange seating, lighting layers, and low furniture horizons to dissolve everyday cognitive noise.',
    coverImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    featuredProductIds: ['sg-02', 'sg-03', 'sg-18'],
    content: {
      intro: 'The living room is where public hospitality meets private decompressing. Creating an atmosphere that supports both requires a thoughtful composition of height, texture, and light.',
      sections: [
        {
          heading: 'Keep the Horizon Low',
          body: 'When sofas and lounge chairs maintain a lower profile (under 80cm total back height), ceilings feel taller, windows remain unobstructed, and rooms feel significantly larger and less claustrophobic.'
        },
        {
          heading: 'Tactile Contrast Over Bright Colors',
          body: 'Rather than introducing loud accent colors, build visual interest through textural contrast: pair smooth bullnosed oak coffee tables with raw nubby bouclé upholstery, brushed brass accents, and matte linen drapery.',
          quote: '“Calm is not the absence of texture; it is the harmonious dialogue between honest surfaces.”'
        }
      ],
      conclusion: 'By prioritizing conversational circles over television-centric grids, you transform the living room into a sanctuary for genuine connection.'
    }
  },
  {
    id: 'journal-04',
    slug: 'why-good-furniture-ages-beautifully',
    title: 'Why Good Furniture Ages Beautifully',
    category: 'Living',
    readTime: '5 min read',
    publishDate: 'May 2026',
    author: 'Simple Grain Craftsmen',
    excerpt: 'Exploring the philosophy of joinery, hand-rubbed wax oils, and the poetry of natural patina over decades of life.',
    coverImage: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80',
    featuredProductIds: ['sg-06', 'sg-07', 'sg-13'],
    content: {
      intro: 'Modern mass manufacture treats furniture as an ephemeral disposable commodity. At Simple Grain, we build with a 50-year perspective.',
      sections: [
        {
          heading: 'The Engineering of Mortise & Tenon',
          body: 'Unlike screws or staples that loosen when timber subtly expands with seasonal humidity, interlocked wooden tenons move in unison with the wood itself, becoming sturdier with time.'
        },
        {
          heading: 'Natural Oils vs. Plastic Lacquers',
          body: 'Thick polyurethane lacquers seal wood under a plastic shell. When scratched, they peel and cloud. Breathable natural wax-oils penetrate deep into the cellular structure, allowing minor scuffs to be buffed away effortlessly with a drop of mineral oil.',
          quote: '“A piece of furniture should not merely survive everyday life — it should be enriched by it.”'
        }
      ],
      conclusion: 'When you invest in honest materials, you invite a companion into your home that chronicles your family’s history through its gentle, evolving patina.'
    }
  }
];
