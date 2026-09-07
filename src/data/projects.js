// Helper function to handle image errors - provides fallback
export const handleImageError = (e) => {
  e.target.src = '/images/placeholder.svg';
};

const projects = [
  // =========================================================
  // PROJECT 1: Modern Commercial Complex
  // =========================================================
  {
    id: 1,
    title: "Modern Commercial Complex",
    category: "Commercial",
    location: "Nagpur, Maharashtra",
    status: "Completed",
    year: "2024",
    image: "/images/projects/commercial-building.jpg",
    description: "A modern commercial complex featuring contemporary architecture, state-of-the-art facilities, and sustainable design principles. This project showcases our expertise in delivering large-scale commercial developments that meet international standards.",
    features: [
      "Contemporary architectural design",
      "Energy-efficient building systems",
      "Modern amenities and facilities",
      "Sustainable construction practices"
    ],
    progressImages: [
      { id: 1, image: "/images/progress/stage-1.jpg", title: "Foundation Work", description: "Excavation and foundation preparation" },
      { id: 2, image: "/images/progress/stage-2.jpg", title: "Structural Framework", description: "Steel and concrete framework installation" },
      { id: 3, image: "/images/progress/stage-3.jpg", title: "Building Envelope", description: "Exterior walls and roofing completion" },
      { id: 4, image: "/images/projects/commercial-building.jpg", title: "Final Completion", description: "Project delivered on schedule" }
    ]
  },

  // =========================================================
  // PROJECT 2: Residential Tower
  // =========================================================
  {
    id: 2,
    title: "Residential Tower",
    category: "Residential",
    location: "Nagpur, Maharashtra",
    status: "Completed",
    year: "2024",
    image: "/images/projects/residential-building.jpg",
    description: "A premium residential tower offering modern living spaces with excellent amenities. The project features thoughtfully designed apartments with natural lighting, ventilation, and contemporary finishes.",
    features: [
      "Premium apartment layouts",
      "Modern clubhouse facilities",
      "Landscaped gardens",
      "24/7 security systems"
    ],
    progressImages: [
      { id: 1, image: "/images/progress/stage-1.jpg", title: "Site Preparation", description: "Land clearing and site development" },
      { id: 2, image: "/images/progress/stage-2.jpg", title: "Foundation & Structure", description: "Foundation laying and structural work" },
      { id: 3, image: "/images/progress/stage-3.jpg", title: "Construction Progress", description: "Main building construction" },
      { id: 4, image: "/images/projects/residential-building.jpg", title: "Project Completion", description: "Ready for possession" }
    ]
  },

  // =========================================================
  // PROJECT 3: Highway Infrastructure
  // =========================================================
  {
    id: 3,
    title: "Highway Infrastructure",
    category: "Infrastructure",
    location: "Nagpur, Maharashtra",
    status: "Ongoing",
    year: "2025",
    image: "/images/projects/infrastructure-road.jpg",
    description: "A major highway infrastructure project involving road construction, bridge development, and drainage systems. This project demonstrates our capability in handling complex infrastructure developments.",
    features: [
      "Multi-lane highway construction",
      "Bridge and overpass development",
      "Advanced drainage systems",
      "Traffic management solutions"
    ],
    progressImages: [
      { id: 1, image: "/images/progress/stage-1.jpg", title: "Initial Survey", description: "Site survey and planning phase" },
      { id: 2, image: "/images/progress/stage-2.jpg", title: "Earthwork", description: "Land leveling and earthwork completion" },
      { id: 3, image: "/images/projects/infrastructure-road.jpg", title: "Current Progress", description: "Road construction in progress" }
    ]
  },

  // =========================================================
  // PROJECT 4: Industrial Facility
  // =========================================================
  {
    id: 4,
    title: "Industrial Facility",
    category: "Industrial",
    location: "Nagpur, Maharashtra",
    status: "Ongoing",
    year: "2025",
    image: "/images/projects/industrial-facility.jpg",
    description: "A modern industrial facility designed for manufacturing operations. The project includes production halls, warehouse spaces, and administrative buildings with all necessary infrastructure.",
    features: [
      "Large-span production halls",
      "Heavy-duty flooring systems",
      "Modern warehouse facilities",
      "Administrative complex"
    ],
    progressImages: [
      { id: 1, image: "/images/progress/stage-1.jpg", title: "Foundation Work", description: "Industrial foundation preparation" },
      { id: 2, image: "/images/progress/stage-2.jpg", title: "Steel Structure", description: "Steel framework installation" },
      { id: 3, image: "/images/projects/industrial-facility.jpg", title: "Current Progress", description: "Facility construction ongoing" }
    ]
  },

  // =========================================================
  // PROJECT 5: Renovation Project
  // =========================================================
  {
    id: 5,
    title: "Heritage Building Renovation",
    category: "Renovation",
    location: "Nagpur, Maharashtra",
    status: "Completed",
    year: "2023",
    image: "/images/projects/renovation-project.jpg",
    description: "A prestigious heritage building renovation project that preserved historical elements while upgrading to modern standards. The project required careful planning and execution to maintain architectural integrity.",
    features: [
      "Heritage preservation",
      "Structural strengthening",
      "Modern amenities integration",
      "Historical facade restoration"
    ],
    progressImages: [
      { id: 1, image: "/images/progress/stage-1.jpg", title: "Assessment", description: "Structural assessment and planning" },
      { id: 2, image: "/images/progress/stage-2.jpg", title: "Restoration Work", description: "Facade and structural restoration" },
      { id: 3, image: "/images/projects/renovation-project.jpg", title: "Completed Renovation", description: "Heritage building restored" }
    ]
  }
];

export default projects;
