import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Users,
  Home,
  Baby,
  ChefHat,
  Heart,
  Car,
  Shirt,
  Brush,
  Flower2,
  GraduationCap,
  UserCog,
  Wrench,
  CalendarDays,
  UtensilsCrossed,
  UserCircle,
  Building,
  Briefcase,
  Activity,
  Globe,
  Truck,
  Database,
  ShoppingBag,
  Search,
  Cog,
  Settings,
  CheckCircle,
  TestTube,
  Headphones,
  ArrowRight,
} from "lucide-react";
import Button from "../../components/Button/Button";
import services from "../../data/services";
import "./ServicesPage.css";

interface DropdownProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  icon,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="service-dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="dropdown-title">
          {icon}
          {title}
        </div>
        <ChevronDown
          className={`dropdown-icon ${isOpen ? "open" : ""}`}
          size={24}
        />
      </div>
      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const domesticStaffList = [
    { icon: <Home size={24} />, title: "Maid / Housemaid" },
    { icon: <Baby size={24} />, title: "Nanny / Babysitter" },
    {
      icon: <ChefHat size={24} />,
      title: "Cook / Personal Chef / Kitchen Staff",
    },
    {
      icon: <Heart size={24} />,
      title: "Nurse / Caregiver / Elder Care Companion",
    },
    { icon: <Car size={24} />, title: "Driver / Chauffeur" },
    { icon: <Shirt size={24} />, title: "Housekeeper / Laundry Worker" },
    { icon: <Brush size={24} />, title: "Houseboy / Cleaner" },
    { icon: <Flower2 size={24} />, title: "Gardener / Pet Sitter" },
    { icon: <GraduationCap size={24} />, title: "Tutor / Teacher / Trainer" },
    { icon: <UserCog size={24} />, title: "Butler / House Manager" },
    { icon: <Wrench size={24} />, title: "Maintenance Worker / Handyman" },
    { icon: <CalendarDays size={24} />, title: "Event Coordinator" },
    { icon: <UtensilsCrossed size={24} />, title: "Dining Room Attendant" },
    { icon: <UserCircle size={24} />, title: "Tailor / Personal Assistant" },
  ];

  const industries = [
    {
      icon: <Building size={36} />,
      title: "Construction",
      tagline: "Building excellence with skilled workers",
      roles: ["Masons", "Electricians", "Plumbers", "Welders", "General Labor"],
    },
    {
      icon: <UtensilsCrossed size={36} />,
      title: "Hospitality",
      tagline: "Elevate guest experience with professionals",
      roles: [
        "Front Office",
        "Housekeeping",
        "Kitchen Staff",
        "Waiters",
        "Event Staff",
      ],
    },
    {
      icon: <Heart size={36} />,
      title: "Healthcare",
      tagline: "Compassionate healthcare staffing solutions",
      roles: ["Nurses", "Caregivers", "Assistants", "Home Health Aides"],
    },
    {
      icon: <Activity size={36} />,
      title: "Manufacturing",
      tagline: "Boost productivity with industrial talent",
      roles: ["Machine Operators", "Assemblers", "Technicians"],
    },
    {
      icon: <Truck size={36} />,
      title: "Logistics & Transport",
      tagline: "Efficient manpower for your supply chain",
      roles: ["Drivers", "Loaders", "Delivery Assistants", "Warehouse Staff"],
    },
     {
    icon: <ShoppingBag size={36} />,
    title: "Retail",
    tagline: "Empowering retail with smart staffing",
    roles: ["Cashiers", "Sales Associates", "Inventory Staff", "Store Managers"],
  },
  ];

  const businessServices = [
    {
      icon: <Globe size={36} />,
      title: "General Trading",
      since: "2000",
      description:
        "Sourcing and supplying products for local and international markets",
    },
    {
      icon: <Building size={36} />,
      title: "Construction Services",
      since: "2002",
      description:
        "Manpower to full project support in residential and commercial construction",
    },
    {
      icon: <Database size={36} />,
      title: "Export & Import",
      since: "2010",
      description:
        "Global trade in consumer goods, construction materials, industrial equipment",
    },
    // {
    //   icon: <Truck size={36} />,
    //   title: "Transport Services",
    //   since: "2014",
    //   description:
    //     "Logistics solutions with reliable fleets and licensed drivers",
    // },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>
            Comprehensive industrial solutions for manufacturing, oil & gas, and engineering sectors
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="services-subtitle">Comprehensive industrial solutions tailored to your needs</p>

          <div className="services-grid">
            <div className="service-card-pro service-card-1">
              <div className="service-content">
                <div className="service-icon-box">
                  <Settings size={32} />
                </div>
                <h3>Plant and Equipment Maintenance</h3>
                <p className="service-description">Comprehensive maintenance services for industrial plants and equipment.</p>
                <a href="/services/plant-equipment-maintenance" className="service-link">Learn More →</a>
              </div>
            </div>
            <div className="service-card-pro service-card-2">
              <div className="service-content">
                <div className="service-icon-box">
                  <Cog size={32} />
                </div>
                <h3>Installation and Commissioning</h3>
                <p className="service-description">Professional installation and commissioning of industrial systems.</p>
                <a href="/services/installation-commissioning" className="service-link">Learn More →</a>
              </div>
            </div>
            <div className="service-card-pro service-card-3">
              <div className="service-content">
                <div className="service-icon-box">
                  <Activity size={32} />
                </div>
                <h3>Automation and Control System Support</h3>
                <p className="service-description">Advanced automation and control system solutions.</p>
                <a href="/services/automation-control" className="service-link">Learn More →</a>
              </div>
            </div>
            <div className="service-card-pro service-card-4">
              <div className="service-content">
                <div className="service-icon-box">
                  <Users size={32} />
                </div>
                <h3>Technical Manpower Supply</h3>
                <p className="service-description">Skilled technical manpower for industrial operations.</p>
                <a href="/services/technical-manpower" className="service-link">Learn More →</a>
              </div>
            </div>
            <div className="service-card-pro service-card-5">
              <div className="service-content">
                <div className="service-icon-box">
                  <CheckCircle size={32} />
                </div>
                <h3>Preventive and Corrective Maintenance</h3>
                <p className="service-description">Proactive and reactive maintenance solutions.</p>
                <a href="/services/preventive-corrective" className="service-link">Learn More →</a>
              </div>
            </div>
            <div className="service-card-pro service-card-6">
              <div className="service-content">
                <div className="service-icon-box">
                  <Building size={32} />
                </div>
                <h3>Facility and Utility Management</h3>
                <p className="service-description">Complete facility and utility management services.</p>
                <a href="/services/facility-utility" className="service-link">Learn More →</a>
              </div>
            </div>
          </div>

          {/* Domestic Staff Section */}
          {/* <Dropdown
            title="Domestic & Support Staff Recruitment"
            icon={<Users size={24} className="text-primary-red" />}
          >
            <p className="mb-4">
              Reliable, trained professionals for every household and lifestyle
              need.
            </p>
            <div className="domestic-staff-grid">
              {domesticStaffList.map((staff, index) => (
                <div key={index} className="staff-item">
                  <span className="staff-icon">{staff.icon}</span>
                  <span>{staff.title}</span>
                </div>
              ))}
            </div>
          </Dropdown> */}

          {/* Industry Section */}
          {/* <Dropdown
            title="Skilled Worker Recruitment by Industry"
            icon={<Briefcase size={24} className="text-primary-red" />}
          >
            <div className="industry-grid">
              {industries.map((industry, index) => (
                <div key={index} className="industry-card">
                  <div className="industry-icon">{industry.icon}</div>
                  <h3 className="industry-title">{industry.title}</h3>
                  <p className="industry-tagline">{industry.tagline}</p>
                  <ul className="industry-roles">
                    {industry.roles.map((role, roleIndex) => (
                      <li key={roleIndex}>{role}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Dropdown> */}

          {/* Business Services Section */}
          {/* <Dropdown
            title="Additional Business Services"
            icon={<Building size={24} className="text-primary-red" />}
          >
            <div className="business-services-grid">
              {businessServices.map((service, index) => (
                <div key={index} className="business-service-card">
                  <div className="card-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <span className="service-since">Since {service.since}</span>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </Dropdown> */}
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">Our Project Execution Process</h2>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-icon"><Search size={38} /></div>
              <h3>Requirements Analysis</h3>
              <p>
                We begin by understanding your project requirements through
                detailed technical consultation and site assessment.
              </p>
            </div>

            <div className="process-card">
              <div className="process-icon"><Cog size={38} /></div>
              <h3>Engineering & Design</h3>
              <p>
                Our technical team develops comprehensive engineering solutions
                and detailed project plans.
              </p>
            </div>

            <div className="process-card">
              <div className="process-icon"><Settings size={38} /></div>
              <h3>Resource Mobilization</h3>
              <p>
                Fast mobilization of skilled manpower, equipment, and materials
                to ensure timely project start.
              </p>
            </div>

            <div className="process-card">
              <div className="process-icon"><CheckCircle size={38} /></div>
              <h3>Execution & Quality Control</h3>
              <p>
                Professional execution with strict quality control and safety
                compliance throughout the project.
              </p>
            </div>

            <div className="process-card">
              <div className="process-icon"><TestTube size={38} /></div>
              <h3>Testing & Commissioning</h3>
              <p>
                Comprehensive testing, commissioning, and performance
                verification before handover.
              </p>
            </div>

            <div className="process-card">
              <div className="process-icon"><Headphones size={38} /></div>
              <h3>Support & Maintenance</h3>
              <p>
                Ongoing support, maintenance services, and performance
                monitoring to ensure optimal operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="services-cta-section">
        <div className="container">
          <div className="cta-wrapper" style={{background: 'linear-gradient(135deg, #1e40af 0%, #059669 100%)'}}>
            <div className="cta-content">
              <h2>Ready to Get Started?</h2>
              <p>
                Contact us today to discuss your industrial project needs and discover how
                we can deliver excellence on time and within budget.
              </p>
              <div className="cta-buttons">
                <button className="cta-btn cta-btn-primary" onClick={() => navigate('/contact')}>
                  Contact Us Now
                  <ArrowRight size={20} />
                </button>
                <button className="cta-btn cta-btn-secondary" onClick={() => navigate('/projects')}>
                  View Projects
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
            <div className="cta-circles">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3">
                <Settings size={150} className="power-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
