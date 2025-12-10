export interface Service {
  id: string;
  name: string;
  description: string;
  icon: any;
  iconUrl: string;
  fullDescription: string;
  benefits: string[];
  process: string[];
}

const services: Service[] = [
  {
    id: "plant-equipment-maintenance",
    name: "PLANT AND EQUIPMENT MAINTENANCE",
    description: "Comprehensive maintenance services for industrial plants and equipment",
    icon: () => <img src="/services/plant.webp" alt="Plant Maintenance" />,
    iconUrl: "/services/plant.webp",
    fullDescription: "Our plant and equipment maintenance services ensure optimal performance and longevity of your industrial assets. We provide comprehensive maintenance solutions including routine inspections, repairs, and performance optimization.",
    benefits: [
      "Minimized downtime and maximized productivity",
      "Extended equipment lifespan",
      "Reduced operational costs",
      "Improved safety and compliance",
      "Expert technical support",
      "Customized maintenance schedules"
    ],
    process: [
      "Equipment assessment and analysis",
      "Maintenance planning and scheduling",
      "Routine inspections and monitoring",
      "Repairs and replacements",
      "Performance optimization",
      "Documentation and reporting"
    ]
  },
  {
    id: "installation-commissioning",
    name: "INSTALLATION AND COMMISSIONING",
    description: "Professional installation and commissioning of industrial systems",
    icon: () => <img src="/services/install.webp" alt="Installation" />,
    iconUrl: "/services/install.webp",
    fullDescription: "Expert installation and commissioning services for industrial systems. Our trained technical team ensures seamless integration and optimal performance of your equipment and systems.",
    benefits: [
      "Professional installation services",
      "System integration expertise",
      "Quality assurance and testing",
      "Minimal disruption to operations",
      "Complete commissioning support",
      "Post-installation support"
    ],
    process: [
      "Site preparation and assessment",
      "Equipment installation",
      "System integration",
      "Testing and calibration",
      "Commissioning and validation",
      "Training and handover"
    ]
  },
  {
    id: "automation-control",
    name: "AUTOMATION AND CONTROL SYSTEM SUPPORT",
    description: "Advanced automation and control system solutions",
    icon: () => <img src="/services/automation.webp" alt="Automation" />,
    iconUrl: "/services/automation.webp",
    fullDescription: "Comprehensive automation and control system support for industrial facilities. We provide design, implementation, and maintenance of advanced control systems to optimize your operations.",
    benefits: [
      "Improved operational efficiency",
      "Enhanced process control",
      "Real-time monitoring and analytics",
      "Reduced manual intervention",
      "System optimization",
      "24/7 technical support"
    ],
    process: [
      "System requirements analysis",
      "Design and engineering",
      "Hardware and software installation",
      "Programming and configuration",
      "Testing and commissioning",
      "Ongoing support and maintenance"
    ]
  },
  {
    id: "technical-manpower",
    name: "TECHNICAL MANPOWER SUPPLY",
    description: "Skilled technical manpower for industrial operations",
    icon: () => <img src="/services/manpower.webp" alt="Manpower" />,
    iconUrl: "/services/manpower.webp",
    fullDescription: "Reliable supply of skilled technical manpower for your industrial needs. We provide qualified professionals for various technical roles to support your operations.",
    benefits: [
      "Skilled and certified professionals",
      "Flexible staffing solutions",
      "Quick deployment",
      "Reduced recruitment costs",
      "Quality assurance",
      "Ongoing training and development"
    ],
    process: [
      "Requirements assessment",
      "Candidate selection and screening",
      "Skills verification",
      "Deployment and onboarding",
      "Performance monitoring",
      "Continuous support"
    ]
  },
  {
    id: "preventive-corrective",
    name: "PREVENTIVE AND CORRECTIVE MAINTENANCE",
    description: "Proactive and reactive maintenance solutions",
    icon: () => <img src="/services/preventive.webp" alt="Preventive Maintenance" />,
    iconUrl: "/services/preventive.webp",
    fullDescription: "Comprehensive preventive and corrective maintenance services to ensure continuous operation of your industrial assets. Our approach minimizes downtime and extends equipment life.",
    benefits: [
      "Reduced unexpected breakdowns",
      "Extended equipment lifespan",
      "Cost-effective maintenance",
      "Improved reliability",
      "Scheduled maintenance planning",
      "Emergency response capability"
    ],
    process: [
      "Maintenance strategy development",
      "Preventive maintenance scheduling",
      "Regular inspections and servicing",
      "Corrective action implementation",
      "Performance tracking",
      "Continuous improvement"
    ]
  },
  {
    id: "facility-utility",
    name: "FACILITY AND UTILITY MANAGEMENT",
    description: "Complete facility and utility management services",
    icon: () => <img src="/services/facuilty.webp" alt="Facility Management" />,
    iconUrl: "/services/facuilty.webp",
    fullDescription: "Comprehensive facility and utility management services for industrial plants and commercial buildings. We ensure efficient operation of all facility systems and utilities.",
    benefits: [
      "Optimized facility operations",
      "Energy efficiency improvements",
      "Cost reduction",
      "Compliance with regulations",
      "Improved safety standards",
      "Comprehensive reporting"
    ],
    process: [
      "Facility assessment",
      "Utility management planning",
      "Operations and monitoring",
      "Maintenance and repairs",
      "Energy optimization",
      "Performance reporting"
    ]
  }
];

export default services;
