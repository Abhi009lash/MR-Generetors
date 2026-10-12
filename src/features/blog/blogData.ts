export interface BlogPost {
  id: string;
  title: string;
  categoryBadge: string;
  readTime: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  categoryGroup: string;
}

export interface BlogCategory {
  name: string;
  count: number;
}

export interface RecentPostItem {
  id: string;
  title: string;
  date: string;
  category: string;
}

export const FEATURED_BLOG_POST: BlogPost = {
  id: 'choose-best-generator-dealer-hyderabad',
  title: 'How To Choose Best Diesel Generator Dealer in Hyderabad',
  categoryBadge: 'BUYING GUIDE',
  readTime: '8 min read',
  author: 'By M.R Generators Editorial • Official Desk',
  date: 'Updated 2024-2025 Edition',
  categoryGroup: 'Buying & Sizing Guides',
  excerpt:
    'Reliable power backup is essential for industries, businesses, hospitals, educational institutions, and residential communities. Choosing the right generator is important, but selecting the right supplier is equally critical. M.R Generators has helped countless customers find the perfect fit, ensuring certified equipment, prompt warranty execution, and transparent pricing across Telangana.',
  content: `
### Key Factors When Selecting a Generator Dealer in Telangana

1. **Direct OEM Authorization & Genuine Channel Distribution**: Always ensure your supplier is an authorized channel partner for Tier-1 brands like Greaves Power, Ashok Leyland, or Cummins. Unauthorized intermediaries often source refurbished engines or third-party canopies without factory testing.

2. **Full In-House Engineering & Turnkey Capabilities**: A complete power partner manages everything: starting from site motor inrush audits, civil RCC foundation plinths, acoustic exhaust ducting, and statutory CEIG electrical inspectorate certifications.

3. **Guaranteed Local Spares Depot & Rapid Field Van Fleet**: In commercial applications and hospital settings, downtime translates to massive losses. Look for a dealer maintaining ready-stock OEM filters, AVRs, and water pumps with on-site technician response guaranteed within 2 hours.

4. **Transparent Fuel Sizing Calculations**: Sizing a genset purely on kVA without accounting for starting power factor, inductive motor spikes, and ambient summer temperatures leads to frequent circuit trips. Ensure your partner runs computer-modeled load audits.
  `,
};

export const BLOG_POSTS_LIST: BlogPost[] = [
  {
    id: 'ashok-leyland-suppliers-hyderabad',
    title: 'Ashok Leyland Diesel Generator Suppliers in Hyderabad',
    categoryBadge: 'BRAND SPOTLIGHT / COMMERCIAL',
    readTime: '6 min read',
    author: 'Author: Technical Team',
    date: 'Oct 2024',
    categoryGroup: 'Brand Spotlights',
    excerpt: 'Reliable power backup is a necessity for businesses, industries, commercial establishments, hospitals, and construction sites. Discover fuel efficiency and Leypower platforms...',
    content: 'Ashok Leyland generators feature heavy automotive-derived engine blocks engineered for high torque and low specific fuel consumption. Learn how our central Hyderabad depot provides complete sales, installation, and AMC services for Leypower generators from 10 kVA to 2250 kVA.',
  },
  {
    id: 'generator-dealers-hospitals-hyderabad',
    title: 'Best Diesel Generator Dealers in Hyderabad for Hospitals',
    categoryBadge: 'HEALTHCARE POWER',
    readTime: '5 min read',
    author: 'Author: Healthcare Power Desk',
    date: 'Oct 2024',
    categoryGroup: 'Hospital & Healthcare Power',
    excerpt: 'Hospitals require continuous and reliable power supply to ensure patient safety, support critical medical equipment like ICUs, ventilators, and surgical suites...',
    content: 'Medical facilities cannot tolerate power interruption. Explore our AMF automatic mains failure synchronized systems, sub-second changeover panels, and medical-grade acoustic enclosures achieving under 75 dBA sound attenuation.',
  },
  {
    id: 'greaves-500-kva-generator-hyderabad',
    title: 'Greaves 500 KVA Generator in Hyderabad',
    categoryBadge: 'INDUSTRIAL DG SETS',
    readTime: '8 min read',
    author: 'Author: Heavy DG Specialist',
    date: 'Oct 2024',
    categoryGroup: 'Brand Spotlights',
    excerpt: 'Reliable power backup is essential for heavy industries, healthcare facilities, and construction sites. A detailed review of Greaves 500 kVA heavy industrial generator...',
    content: 'Powered by Greaves high-efficiency CPCB IV+ turbocharged aftercooled engine, the 500 kVA platform provides 110% overload capability, electronic governing, and class-leading low operating fuel cost.',
  },
  {
    id: 'cummins-generator-dealers-hyderabad',
    title: 'Cummins Generator Dealers in Hyderabad',
    categoryBadge: 'BRAND SPOTLIGHT',
    readTime: '6 min read',
    author: 'Author: M.R Generators Team',
    date: 'Oct 2024',
    categoryGroup: 'Brand Spotlights',
    excerpt: 'In today’s fast-paced business environment, uninterrupted power is essential for maintaining productivity. Learn about Cummins PowerCommand series and transient load response...',
    content: 'Cummins remains the global benchmark for heavy data center and manufacturing standby power. We supply and service Cummins systems with genuine Fleetguard filters and factory parts.',
  },
  {
    id: 'diesel-generator-home-use-hyderabad',
    title: 'Best Diesel Generator for Home Use in Hyderabad',
    categoryBadge: 'RESIDENTIAL BACKUP',
    readTime: '4 min read',
    author: 'Author: Residential Power Desk',
    date: 'Sep 2024',
    categoryGroup: 'Residential & Home DG Sets',
    excerpt: 'Power outages can disrupt everyday life and create inconvenience for homeowners. From lighting to home office equipment and inverter-grade air conditioners...',
    content: 'Discover ultra-quiet residential DG sets ranging from 5 kVA to 25 kVA designed with compact footprints, vibration-damping dampers, and weatherproof residential silencers.',
  },
  {
    id: 'jakson-generator-dealers-hyderabad',
    title: 'Jakson Generator Dealers in Hyderabad',
    categoryBadge: 'COMMERCIAL POWER',
    readTime: '5 min read',
    author: 'Author: Technical Team',
    date: 'Sep 2024',
    categoryGroup: 'Brand Spotlights',
    excerpt: 'Power interruptions can affect industries, offices, and commercial spaces. Having a reliable power backup system powered by Cummins-Jakson silent canopy units...',
    content: 'Jakson acoustic enclosures combined with Cummins engines deliver dependable power for commercial IT corridors and educational campuses across Cyberabad and Secunderabad.',
  },
  {
    id: 'ashok-leyland-25-kva-price-hyderabad',
    title: 'Ashok Leyland 25 kVA Diesel Generator Price in Hyderabad',
    categoryBadge: 'PRICING & SIZING',
    readTime: '4 min read',
    author: 'Author: Sales & Estimation',
    date: 'Sep 2024',
    categoryGroup: 'Buying & Sizing Guides',
    excerpt: 'Power backup has become essential for businesses and commercial spaces in Hyderabad due to frequent fluctuations. Explore ex-factory pricing and sizing guidance...',
    content: 'A comprehensive pricing breakdown for the Ashok Leyland 25 kVA silent genset, including canopy specifications, standard AMF controller, delivery timelines, and installation scope.',
  },
  {
    id: 'radiator-cooling-system-spares-hyderabad',
    title: 'Radiator & Cooling System Spares for Generators in Hyderabad',
    categoryBadge: 'MAINTENANCE & SPARES',
    readTime: '5 min read',
    author: 'Author: Workshop Head',
    date: 'Sep 2024',
    categoryGroup: 'Spares & Cooling Systems',
    excerpt: 'Generators are the backbone of uninterrupted power supply. But without an efficient cooling system, even the best generator can fail due to overheating...',
    content: 'Learn how to maintain heavy radiator cores, coolant chemical ratios, thermostat valves, and centrifugal water pumps to prevent emergency thermal shutdown during Hyderabad 45°C+ summer peaks.',
  },
  {
    id: 'best-generator-amc-services-hyderabad',
    title: 'Best Generator AMC Services in Hyderabad',
    categoryBadge: 'AMC & MAINTENANCE',
    readTime: '5 min read',
    author: 'Author: AMC Service Coordinator',
    date: 'Aug 2024',
    categoryGroup: 'AMC & Maintenance Services',
    excerpt: 'Power interruptions can disrupt businesses. That’s why choosing the best generator AMC services in Hyderabad is essential for hospitals, manufacturing plants, pharma labs, and IT campuses...',
    content: 'Detailed comparison between Comprehensive and Non-Comprehensive Annual Maintenance Contracts, scheduled A-Check to D-Check inspection protocols, and 24/7 emergency dispatch SLAs.',
  },
];

export const BLOG_CATEGORIES: BlogCategory[] = [
  { name: 'Buying & Sizing Guides', count: 12 },
  { name: 'Brand Spotlights (Tata, Cummins, Leyland, KOEL, Greaves)', count: 10 },
  { name: 'Hospital & Healthcare Power', count: 8 },
  { name: 'Residential & Home DG Sets', count: 6 },
  { name: 'AMC & Maintenance Services', count: 14 },
  { name: 'Spares & Cooling Systems', count: 7 },
];

export const RECENT_POSTS: RecentPostItem[] = [
  { id: 'choose-best-generator-dealer-hyderabad', title: 'How To Choose Best Diesel Generator Dealer in Hyderabad', date: 'Oct 2024', category: 'Buying Guide' },
  { id: 'greaves-500-kva-generator-hyderabad', title: 'Greaves 500 KVA Generator in Hyderabad', date: 'Oct 2024', category: 'Industrial DG' },
  { id: 'diesel-generator-home-use-hyderabad', title: 'Best Diesel Generator for Home Use in Hyderabad', date: 'Sep 2024', category: 'Residential' },
  { id: 'best-generator-amc-services-hyderabad', title: 'Top Generator Sales & Service – 24/7 Support', date: 'Sep 2024', category: 'AMC Service' },
];
