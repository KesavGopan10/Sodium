
import { Brain, Cloud, Code2, Rocket, Headphones, Users, CircleDollarSign, ChefHat } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const categories = [
    {
      title: "Food Technology Solutions",
      icon: <ChefHat className="w-12 h-12 text-sodium-highlight mb-4" />,
      services: [
        "Food Safety & Quality Management",
        "Supply Chain Optimization",
        "Digital Menu Management",
        "Inventory Control Systems",
        "Restaurant Management Software",
        "Food Delivery Platforms",
        "IoT Solutions for Food Storage",
        "Food Processing Automation"
      ]
    },
    {
      title: "Enterprise Services",
      icon: <Code2 className="w-12 h-12 text-sodium-highlight mb-4" />,
      services: [
        "Enterprise Application Development",
        "Mobile Application Development",
        "Web Development",
        "IT Infrastructure Management",
        "Cloud Services",
        "IT Staffing Solutions",
        "Product Development",
        "Legacy System Modernization"
      ]
    },
    {
      title: "Digital and Business Transformation",
      icon: <Brain className="w-12 h-12 text-sodium-highlight mb-4" />,
      services: [
        "Digital Business Transformation",
        "Artificial Intelligence (AI)",
        "Cloud Transformation",
        "Data & Analytics",
        "Managed Security Services",
        "Innovation at Scale",
        "Automation",
        "Experience Design",
        "Agile Transformation",
        "ESG Solutions"
      ]
    },
    {
      title: "Technology Solutions and Operations",
      icon: <Cloud className="w-12 h-12 text-sodium-highlight mb-4" />,
      services: [
        "Digital Solutions, Implementation & Operations",
        "Operationalizing Strategy & Architecture",
        "Custom Application Engineering & Data Solutions",
        "Scaled Operations",
        "SaaS and Enterprise Apps",
        "Product Engineering",
        "Next-Gen Talent Solutions",
        "IT Support Solutions",
        "Customer Service Excellence"
      ]
    },
    {
      title: "Platforms and Design",
      icon: <Rocket className="w-12 h-12 text-sodium-highlight mb-4" />,
      services: [
        "Digital Services Platforms",
        "Design Solutions",
        "Cloud Transformation"
      ]
    },
    {
      title: "IT Support Solutions",
      icon: <Headphones className="w-12 h-12 text-sodium-highlight mb-4" />,
      services: [
        "24/7 Technical Support",
        "Infrastructure Monitoring",
        "Help Desk Services",
        "Network Support",
        "System Maintenance",
        "Security Management"
      ]
    },
    {
      title: "Customer Service",
      icon: <Users className="w-12 h-12 text-sodium-highlight mb-4" />,
      services: [
        "24/7 Customer Support",
        "Multi-channel Support",
        "Customer Experience Management",
        "Service Level Agreement Management",
        "Quality Assurance",
        "Customer Feedback Analysis"
      ]
    },
    {
      title: "Hire Our Developers",
      icon: <CircleDollarSign className="w-12 h-12 text-sodium-highlight mb-4" />,
      services: [
        "Dedicated Development Teams",
        "Staff Augmentation",
        "Project-based Hiring",
        "Remote Development Teams",
        "Technology Consulting",
        "Skill-specific Hiring"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-sodium-primary mb-4">Our Technology Solutions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of IT solutions designed to transform your business
            and drive innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0">{category.icon}</div>
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-sodium-primary mb-2">
                      {category.title}
                    </h2>
                  </div>
                </div>

                <ul className="space-y-2">
                  {category.services.map((service) => (
                    <motion.li
                      key={service}
                      className="flex items-center text-gray-600 hover:text-sodium-primary transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-2">•</span>
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
