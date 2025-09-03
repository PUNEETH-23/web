import { Material } from '../types';

// Import images properly so bundler can handle them
import img12mm from '../assets/12-mm.jpg';
import img20mm from '../assets/20mm.jpg';
import imgMSand from '../assets/m-sand.jpg';
import imgWetMix from '../assets/wet mix.jpg';
import imgDust from '../assets/dust.jpg';

export const materials: Material[] = [
  {
    id: '1',
    name: '12-mm Aggregate',
    description: 'Crushed stone aggregate ideal for road base, driveways, landscaping, and drainage projects. Known for durability, strength, and excellent compaction properties.',
    uses: ['Road base', 'Driveways', 'Landscaping', 'Drainage systems'],
    image: img12mm,
    price: 'Rs 450 per ton'
  },
  {
    id: '2',
    name: '20-mm Aggregate',
    description: 'Coarse crushed stone used in construction for concrete mixing, foundations, retaining walls, and heavy-duty pavements. Provides high load-bearing capacity.',
    uses: ['Concrete mixing', 'Retaining walls', 'Pavements', 'Heavy foundations'],
    image: img20mm,
    price: 'Rs 500 per ton'
  },
  {
    id: '3',
    name: 'M-Sand (Manufactured Sand)',
    description: 'Fine crushed rock sand, an eco-friendly alternative to river sand. Used for plastering, block work, and concrete production with consistent quality and grading.',
    uses: ['Plastering', 'Block work', 'Concrete production', 'Tile laying'],
    image: imgMSand,
    price: 'Rs 500 per ton'
  },
  {
    id: '4',
    name: 'Wet Mix Macadam',
    description: 'Pre-mixed blend of crushed stone aggregates and granular materials with water for road construction sub-base and base layers. Ensures strength and durability.',
    uses: ['Road base layers', 'Highway construction', 'Rural roads', 'Pavement sub-base'],
    image: imgWetMix,
    price: 'Rs 425 per ton'
  },
  {
    id: '5',
    name: 'Stone Dust',
    description: 'Fine particles from crushed stone, used as a filler material in concrete, paving blocks, and as a compact base for landscaping and construction projects.',
    uses: ['Paving block filler', 'Concrete filler', 'Base for tiles', 'Landscaping'],
    image: imgDust,
    price: 'Rs 450 per ton'
  },
];
