import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Power,
  Settings,
  Clock,
  Box,
  Zap,
  Wrench,
  Shield,
  Users,
  FileText,
  Phone,
} from "lucide-react";

const ProductsServices = () => {
  const [activeTab, setActiveTab] = useState("products");

  const tabs = [
    { id: "products", label: "Products" },
    { id: "services", label: "Services" },
  ];

  const products = [
    {
      id: "standby-generators",
      title: "Standby Generators",
      description: "Automatic backup power systems for homes and businesses.",
      icon: <Power className="w-6 h-6 text-white" />,
    },
    {
      id: "portable-generators",
      title: "Portable Generators",
      description:
        "Flexible power solutions for temporary or mobile applications.",
      icon: <Settings className="w-6 h-6 text-white" />,
    },
    {
      id: "industrial-generators",
      title: "Industrial Generators",
      description:
        "Heavy-duty power solutions for industrial applications and data centers.",
      icon: <Wrench className="w-6 h-6 text-white" />,
    },
    {
      id: "transfer-switches",
      title: "Transfer Switches",
      description:
        "Automatic and manual transfer switches for seamless power transition.",
      icon: <Clock className="w-6 h-6 text-white" />,
    },
    {
      id: "control-systems",
      title: "Control Systems",
      description:
        "Advanced monitoring and control systems for power equipment.",
      icon: <Box className="w-6 h-6 text-white" />,
    },
    {
      id: "power-accessories",
      title: "Power Accessories",
      description: "Essential accessories and components for power systems.",
      icon: <Zap className="w-6 h-6 text-white" />,
    },
  ];

  const services = [
    {
      id: "generator-installation",
      title: "Generator Purchase & Installation",
      description:
        "Let us help you find the right generator and install it professionally.",
      icon: <Power className="w-6 h-6 text-white" />,
    },
    {
      id: "installation",
      title: "Installation Services",
      description: "Professional installation of power systems and equipment.",
      icon: <Wrench className="w-6 h-6 text-white" />,
    },
    {
      id: "maintenance",
      title: "Maintenance & Repair",
      description:
        "Regular maintenance and repair services for power equipment.",
      icon: <Wrench className="w-6 h-6 text-white" />,
    },
    {
      id: "emergency-support",
      title: "Emergency Support",
      description: "24/7 emergency support and troubleshooting services.",
      icon: <Shield className="w-6 h-6 text-white" />,
    },
    {
      id: "consultation",
      title: "Consultation",
      description:
        "Expert consultation for power system design and implementation.",
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      id: "documentation",
      title: "Documentation",
      description: "Comprehensive documentation and compliance services.",
      icon: <FileText className="w-6 h-6 text-white" />,
    },
    {
      id: "customer-support",
      title: "Customer Support",
      description: "Dedicated customer support and assistance services.",
      icon: <Phone className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <div className="py-12 md:px-16 from-white-100 to-white via-green-50 bg-gradient-to-b">
      <div className="bg-gradient-to-b from-green-100 to-white via-green-50 h-[200px] flex items-center justify-center w-full">
        <div className="text-center mb-12 mt-4">
          <h2 className="text-4xl text-gray-800">
            <span className="font-bold">Products</span>{" "}
            <span className="text-gray-800 font-bold">&</span>{" "}
            <span className="text-green-500 italic">Services</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Explore our comprehensive range of power solutions for businesses
            and homes.
          </p>
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md inline-flex items-center transition-colors duration-300">
            LEARN MORE
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="mb-8 mt-2">
          <div className="inline-flex border border-green-500 rounded-md overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-8 py-2 ${
                  activeTab === tab.id
                    ? "bg-green-500 text-white"
                    : "bg-white text-green-500"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(activeTab === "services" ? services : products).map((item) => (
            <Link
              key={item.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300 cursor-pointer"
              to={`${
                activeTab === "products"
                  ? `/products/${item.id}`
                  : `/services/${item.id}`
              }`}
            >
              <div className="p-6">
                <div className="bg-green-500 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="text-green-500 font-medium items-center hover:text-green-600 transition-colors duration-300 flex justify-between">
                  <span>LEARN MORE</span>
                  <ArrowRight size={30} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Need Custom Solutions?
              </h2>
              <p className="text-gray-600 mb-8">
                Our team of experts can help you find the perfect power solution
                for your specific needs. Contact us today for a consultation.
              </p>
              <div>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md inline-flex items-center transition-colors duration-300">
                  Get In Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/spraying.png"
                alt="Technician installing power equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsServices;
