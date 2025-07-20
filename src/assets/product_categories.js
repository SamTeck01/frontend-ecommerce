import inverter from '../assets/inverter.png';
import controller from '../assets/controller.jpg';
import battery from '../assets/tubular.png';
import panel from '../assets/a lot of panels.png';
import BatteryCategory from '../assets/Battery Category.jpg';
import PanelCategory from '../assets/Solar Panel Category.jpg';
import OtherCategory from '../assets/Other Category.jpg';
import InverterCategory from '../assets/Inverter Category.jpg';

const productCategories = [
  {
    id: 'inverter',
    slug: 'solar-inverters',
    title: 'Solar Inverters',
    description: 'Discover advanced solar inverters designed for seamless energy conversion and smart load management. Perfect for homes and businesses seeking reliable, efficient power solutions with modern features.',
    image: InverterCategory,
    products: [
      {
        id: 'inv-01',
        name: 'Pure Sine Inverter 5kW',
        price: '₦180,000',
        image: inverter,
        specs: 'High efficiency, smart load balancing',
        description: 'A reliable 5kW inverter designed for seamless DC-to-AC conversion with intelligent power regulation and protective features.',
        features: [
          '5kW Capacity',
          'Mobile Monitoring',
          'LCD Diagnostics',
          'Overload Protection',
          'Fan Cooling',
          'Compact Build'
        ],
        sections: [
        {
            title: 'General',
            content: [
            'Power Capacity: 5kW',
            'Wave Type: Pure Sine Wave',
            'Input Voltage: 12V',
            'Recommended Usage: Homes & offices',
            'Backup Duration: 8–10 hours (average load)'
            ]
        },
        {
            title: 'Specifications',
            content: [
            'Smart load balancing',
            'Low-noise fan cooling',
            'LCD display with fault alerts',
            'Overload & short-circuit protection'
            ]
        },
        {
            title: 'What’s in the box',
            content: [
            '1x Pure Sine Inverter 5kW',
            'User Manual',
            'Mounting Accessories'
            ]
        }
        ]
    },
      {
        id: 'inv-02',
        name: 'Hybrid Inverter 3.5kW',
        price: '₦155,000',
        image: inverter,
        specs: 'Battery-ready with mobile monitoring',
        description: 'A versatile hybrid inverter supporting battery integration and mobile monitoring for efficient energy management.',
        features: [
          '3.5kW Capacity',
          'Hybrid Wave Output',
          'Battery Integration',
          'Mobile App Monitoring',
          'LCD Display',
          'Overload Protection'
        ],
        sections: [
        {
            title: 'General',
            content: [
            'Power Capacity: 3.5kW',
            'Wave Type: Hybrid',
            'Input Voltage: 24V',
            'Recommended Usage: Homes & small businesses',
            'Backup Duration: 6–8 hours (average load)'
            ]
        },
        {
            title: 'Specifications',
            content: [
            'Battery-ready',
            'Mobile app monitoring',
            'Overload & short-circuit protection',
            'LCD display'
            ]
        },
        {
            title: 'What’s in the box',
            content: [
            '1x Hybrid Inverter 3.5kW',
            'User Manual',
            'Mounting Accessories'
            ]
        }
        ]
      }
      // add more inverter products here
    ]
  },
  {
    id: 'panels',
    slug: 'solar-panels',
    title: 'Solar Panels',
    description: 'Explore our selection of high-performance solar panels engineered for maximum energy capture and durability. Ideal for those who want to harness clean, renewable power and reduce electricity costs.',
    image: PanelCategory,
    products: [
      {
        id: 'pan-01',
        name: 'Monocrystalline 400W',
        price: '₦215,000',
        image: panel,
        specs: '25-year warranty, high efficiency',
        description: 'High-efficiency monocrystalline solar panel with long-term warranty and robust build.',
        features: [
          '400W Output',
          'Monocrystalline Cells',
          'High Efficiency',
          '25-Year Warranty',
          'Weather Resistant',
          'Durable Frame'
        ],
        sections: [
        {
            title: 'General',
            content: [
            'Panel Type: Monocrystalline',
            'Power Output: 400W',
            'Warranty: 25 years',
            'Recommended Usage: Residential & commercial',
            'Efficiency: High'
            ]
        },
        {
            title: 'Specifications',
            content: [
            'Durable frame',
            'Weather-resistant',
            'High conversion efficiency',
            'Easy installation'
            ]
        },
        {
            title: 'What’s in the box',
            content: [
            '1x Monocrystalline 400W Panel',
            'User Manual',
            'Mounting Accessories'
            ]
        }
        ]
      },
      {
        id: 'pan-02',
        name: 'Polycrystalline 350W',
        price: '₦195,000',
        image: panel,
        specs: 'Durable and affordable',
        description: 'Affordable polycrystalline solar panel designed for reliable energy generation.',
        features: [
          '350W Output',
          'Polycrystalline Cells',
          'Affordable Pricing',
          'Weather Resistant',
          'Durable Frame',
          'Easy Installation'
        ],
        sections: [
        {
            title: 'General',
            content: [
            'Panel Type: Polycrystalline',
            'Power Output: 350W',
            'Warranty: 20 years',
            'Recommended Usage: Residential',
            'Efficiency: Moderate'
            ]
        },
        {
            title: 'Specifications',
            content: [
            'Durable frame',
            'Weather-resistant',
            'Affordable pricing',
            'Easy installation'
            ]
        },
        {
            title: 'What’s in the box',
            content: [
            '1x Polycrystalline 350W Panel',
            'User Manual',
            'Mounting Accessories'
            ]
        }
        ]
      }
      // add more panel products here
    ]
  },
  {
    id: 'batteries',
    slug: 'battery-storage',
    title: 'Battery Storage',
    description: 'Choose from our range of robust battery storage solutions for dependable backup and energy resilience. Designed for long life and low maintenance, these batteries keep your solar system running smoothly.',
    image: BatteryCategory,
    products: [
      {
        id: 'bat-01',
        name: 'Tubular Battery 200Ah',
        price: '₦190,000',
        image: battery,
        specs: 'Long life, low maintenance',
        description: 'Tubular battery with high capacity and low maintenance for reliable backup.',
        features: [
          '200Ah Capacity',
          'Tubular Design',
          'Long Life',
          'Low Maintenance',
          'Deep Cycle',
          'Safe Operation'
        ],
        sections: [
        {
            title: 'General',
            content: [
            'Battery Type: Tubular',
            'Capacity: 200Ah',
            'Recommended Usage: Backup systems',
            'Maintenance: Low',
            'Life Span: Long'
            ]
        },
        {
            title: 'Specifications',
            content: [
            'Robust build',
            'Deep cycle',
            'Low maintenance',
            'Safe operation'
            ]
        },
        {
            title: 'What’s in the box',
            content: [
            '1x Tubular Battery 200Ah',
            'User Manual',
            'Connection Accessories'
            ]
        }
        ]
      },
      {
        id: 'bat-02',
        name: 'Lithium-Ion 150Ah',
        price: '₦220,000',
        image: battery,
        specs: 'Compact and high performance',
        description: 'Compact lithium-ion battery for high performance and efficient energy storage.',
        features: [
          '150Ah Capacity',
          'Lithium-Ion Technology',
          'Compact Size',
          'High Energy Density',
          'Fast Charging',
          'Extended Life Span'
        ],
        sections: [
        {
            title: 'General',
            content: [
            'Battery Type: Lithium-Ion',
            'Capacity: 150Ah',
            'Recommended Usage: Portable & backup',
            'Maintenance: Minimal',
            'Life Span: Extended'
            ]
        },
        {
            title: 'Specifications',
            content: [
            'Lightweight',
            'High energy density',
            'Fast charging',
            'Safe operation'
            ]
        },
        {
            title: 'What’s in the box',
            content: [
            '1x Lithium-Ion 150Ah Battery',
            'User Manual',
            'Connection Accessories'
            ]
        }
        ]
      }
      // add more battery products here
    ]
  },
  {
    id: 'monitoring',
    slug: 'monitoring-systems',
    title: 'Monitoring Systems',
    description: 'Upgrade your solar setup with smart monitoring systems that deliver real-time insights and control. Track your energy usage, optimize performance, and enjoy peace of mind with innovative technology.',
    image: OtherCategory,
    products: [
      {
        id: 'mon-01',
        name: 'IoT Smart Controller',
        price: '₦85,000',
        image: controller,
        specs: 'App support, power alerts',
        description: 'IoT-enabled smart controller for real-time monitoring and power alerts.',
        features: [
          'IoT Connectivity',
          'App Support',
          'Power Alerts',
          'Real-Time Monitoring',
          'Easy Installation',
          'User Friendly'
        ],
        sections: [
        {
            title: 'General',
            content: [
            'Controller Type: IoT Smart',
            'Connectivity: App support',
            'Alerts: Power notifications',
            'Recommended Usage: Solar systems',
            'Monitoring: Real-time'
            ]
        },
        {
            title: 'Specifications',
            content: [
            'Mobile app integration',
            'Live data feed',
            'Power alerts',
            'Easy installation'
            ]
        },
        {
            title: 'What’s in the box',
            content: [
            '1x IoT Smart Controller',
            'User Manual',
            'Connection Accessories'
            ]
        }
        ]
      },
      {
        id: 'mon-02',
        name: 'Energy Monitoring Kit',
        price: '₦78,000',
        image: controller,
        specs: 'Live data with analytics',
        description: 'Energy monitoring kit providing live data and analytics for solar systems.',
        features: [
          'Live Data Feed',
          'Analytics Dashboard',
          'Power Alerts',
          'Wired/Wireless Connectivity',
          'Easy Installation',
          'Real-Time Insights'
        ],
        sections: [
        {
            title: 'General',
            content: [
            'Kit Type: Energy Monitoring',
            'Data: Live analytics',
            'Recommended Usage: Solar systems',
            'Connectivity: Wired/Wireless',
            'Monitoring: Real-time'
            ]
        },
        {
            title: 'Specifications',
            content: [
            'Live data feed',
            'Analytics dashboard',
            'Easy installation',
            'Power alerts'
            ]
        },
        {
            title: 'What’s in the box',
            content: [
            '1x Energy Monitoring Kit',
            'User Manual',
            'Connection Accessories'
            ]
        }
        ]
      }
      // add more monitoring products here
    ]
  }
];

export default productCategories;
