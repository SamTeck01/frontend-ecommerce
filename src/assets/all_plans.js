
const plans = [
  {
    title: 'Mini Basic',
    slug: 'mini-basic',
    price: '₦450,000',
    priceLabel: 'Limited Offer',
    features: [
      '1.2KVA/12v Inverter (1 year warranty)',
      '220AH/12V Tall Tubular Battery',
      'No Solar Panel',
      'Battery Rack',
      'Electrical Installation Kit Included',
    ],
    description: [
      {
        title: 'General',
        content: [
          'Plan Type: Mini Basic',
          'Inverter Capacity: 1.2KVA / 12V (Pure Sine Wave)',
          'Battery: 220AH/12V Tall Tubular',
          'Solar Panels: None',
          'Monitoring: Not included',
          'Backup Duration: 6-8 hours depending on usage'
        ]
      },
      {
        title: 'Connectivity',
        content: [
          'IoT Monitoring: Not included',
          'Mobile App: No'
        ]
      },
      {
        title: 'Key Features',
        content: [
          'Affordable entry-level package',
          'Reliable backup for essential appliances',
          'Easy to install and maintain'
        ]
      },
      {
        title: 'What’s in the box',
        content: [
          '1x 1.2KVA Inverter',
          '1x 220AH Tall Tubular Battery',
          'Battery Rack',
          'Electrical Installation Kit',
          'User Manual'
        ]
      }
    ],
    image: 'https://www.dropbox.com/scl/fi/7milrx4v9cz6ompqoi9t9/bee-mini-plan.jpg?rlkey=0mpnzzp72xpbh4viwk51kh3pd&dl=0',
  },
  {
    title: 'Mini Premium',
    slug: 'mini-premium',
    price: '₦800,000',
    priceLabel: 'Most Popular',
    features: [
      '1.2KVA/12v Inverter (1 year warranty)',
      '220AH/12V Tall Tubular Battery',
      '3× 250W Solar Panels',
      'Solar Installation + Monitoring',
      'And Lot More...',
    ],
    fullFeatures: [
      '1.2KVA/12v Inverter (1 year warranty)',
      '220AH/12V Tall Tubular Battery',
      'Battery Rack',
      'Electrical Installation Kit Included',
      '250 Watt Poly Solar Panels X 3 Pieces.',
      'Solar Charge Controller',
      'Solar Panel Cable',
      'Solar Panel Installation Kit',
      'Protective Devices',
    ],
    description: [
      {
        title: 'General',
        content: [
          'Plan Type: Mini Premium',
          'Inverter Capacity: 1.2KVA / 12V',
          'Battery: 220AH/12V Tall Tubular',
          'Solar Panels: 3x 250W Polycrystalline',
          'Monitoring: Basic monitoring included'

        ]
      },
      {
        title: 'Connectivity',
        content: [
          'IoT Monitoring: Optional',
          'Mobile App: No'
        ]
      },
      {
        title: 'Key Features',
        content: [
          'Moderate capacity for homes needing continuous power',
          'Solar panel inclusion for better autonomy',
          'Simple remote monitoring'
        ]
      },
      {
        title: 'What’s in the box',
        content: [
          '1x 1.2KVA Inverter',
          '3x 250W Solar Panels',
          '1x 220AH Tall Tubular Battery',
          'Battery Rack',
          'Solar Charge Controller',
          'Installation Kit',
          'User Manual'
        ]
      }
    ],
    image: 'https://www.dropbox.com/scl/fi/7milrx4v9cz6ompqoi9t9/bee-mini-plan.jpg?rlkey=0mpnzzp72xpbh4viwk51kh3pd&dl=0',
  },
  {
    title: 'Midi Basic',
    slug: 'midi-basic',
    price: '₦800,000',
    priceLabel: 'Value Plan',
    features: [
      '2.5KVA/24V Inverter (1 year warranty)',
      '220AH/12v Tall Tubular Batteries',
      'Battery Rack',
      '2× 250W Solar Panels',
      'Electrical Installation & Monitoring Kit',
    ],
    fullFeatures: [
      '2.5KVA/24v Inverter (1 year warranty)',
      '220AH/12v Tall Tubular Batteries',
      'Battery Rack',
      '2 Pieces of 250 Watt Poly Solar Panels.',
      'Electrical Installation Kit',
    ],
    description: [
      {
        title: 'General',
        content: [
          'Plan Type: Midi Basic',
          'Inverter Capacity: 2.5KVA / 24V',
          'Batteries: 2x 220AH/12V Tall Tubular',
          'Solar Panels: 2x 250W Polycrystalline',
          'Monitoring: Standard'
        ]
      },
      {
        title: 'Connectivity',
        content: [
          'IoT Monitoring: No',
          'Mobile App: No'
        ]
      },
      {
        title: 'Key Features',
        content: [
          'Stable energy for shops and medium homes',
          'Supports more appliances',
          'Mid-range solar backup'
        ]
      },
      {
        title: 'What’s in the box',
        content: [
          '1x 2.5KVA Inverter',
          '2x 250W Solar Panels',
          '2x 220AH Tall Tubular Batteries',
          'Battery Rack',
          'Electrical Installation Kit',
          'User Manual'
        ]
      }
    ],
    image: 'https://www.dropbox.com/scl/fi/ofyvogauggcvnqa4fx5li/bee-mini-plan.jpg?rlkey=837du19guunsvzxp8xavll1px&st=lt12tahg&dl=0',
  },
  {
    title: 'Midi Premium',
    slug: 'midi-premium',
    price: '₦1,800,000',
    priceLabel: 'Full Setup',
    features: [
      '2.5KVA/24V Inverter (2 years warranty)',
      '2× 220AH/12V Tubular Batteries',
      '6× 250W Solar Panels',
      'Smart Monitoring & IoT Integration',
      'MPPT Solar Charge Controller',
    ],
    fullFeatures: [
      '2.5KVA/24v Inverter (1 year warranty)',
      '2 pieces of 220AH/12v Tall Tubular Batteries',
      'Battery Rack',
      '6 Pieces of 250 Watt Poly Solar Panels.',
      'Battery Rack & Monitoring Kit',
      'MPPT Solar Charge Controller',
      'Solar Panel Cable',
      'Solar Panel Installation Kit',
      'Protective Devices',
    ],
    description: [
      {
        title: 'General',
        content: [
          'Plan Type: Midi Premium',
          'Inverter Capacity: 2.5KVA / 24V',
          'Batteries: 2x 220AH/12V Tall Tubular',
          'Solar Panels: 6x 250W Polycrystalline',
          'Monitoring: Advanced IoT & Mobile Monitoring',
          'Warranty: 2 years on Inverter, 18 months on Battery'
        ]
      },
      {
        title: 'Connectivity',
        content: [
          'IoT Monitoring: Yes',
          'Mobile App: Available'
        ]
      },
      {
        title: 'Key Features',
        content: [
          'Commercial grade capacity',
          'Smart Monitoring & IoT Control',
          'MPPT Solar Charge Controller for optimal efficiency',
          'Great for large homes, offices'
        ]
      },
      {
        title: 'What’s in the box',
        content: [
          '1x 2.5KVA Inverter',
          '6x 250W Solar Panels',
          '2x 220AH Tall Tubular Batteries',
          'MPPT Solar Charge Controller',
          'Battery Rack',
          'Monitoring Kit',
          'Installation Kit',
          'User Manual'
        ]
      }
    ],
    image: 'https://www.dropbox.com/scl/fi/ofyvogauggcvnqa4fx5li/bee-mini-plan.jpg?rlkey=837du19guunsvzxp8xavll1px&st=lt12tahg&dl=0',
  },
];

export default plans;
