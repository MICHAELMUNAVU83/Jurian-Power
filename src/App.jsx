import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/home";

import Topbar from "./components/topbar";
import Footer from "./components/footer";
import ProductsServices from "./pages/productServices";
import ProductCategory from "./pages/ProductCategory";
import ProductDetail from "./pages/ProductDetail";
import ServiceDetail from "./pages/ServiceDetail";
import AboutUs from "./pages/about_us";
import Brands from "./pages/brands";
import ContactUs from "./pages/contact_us";

// Move categories data to App level
const categories = {
  "standby-generators": {
    title: "Standby Generators",
    description: "Automatic backup power systems for homes and businesses.",
    products: [
      {
        id: "standby-7kw",
        title: "7.5kW Standby Generator",
        description: "Perfect for residential homes and small businesses.",
        image: "/images/generator1.png",
        specs: {
          power: "7.5kW",
          fuel: "Natural Gas",
          runtime: "Unlimited with fuel supply",
          price: "Ksh1,425,000",
        },
      },
      {
        id: "standby-15kw",
        title: "15kW Standby Generator",
        description:
          "Ideal for medium-sized homes and small commercial spaces.",
        image: "/images/generator2.png",
        specs: {
          power: "15kW",
          fuel: "Natural Gas / Propane",
          runtime: "Unlimited with fuel supply",
          price: "Ksh1,425,000",
        },
      },
      {
        id: "standby-22kw",
        title: "22kW Standby Generator",
        description: "Powerful solution for large homes and medium businesses.",
        image: "/images/generator1.png",
        specs: {
          power: "22kW",
          fuel: "Natural Gas / Propane",
          runtime: "Unlimited with fuel supply",
          price: "Ksh1,425,000",
        },
      },
    ],
  },
  "portable-generators": {
    title: "Portable Generators",
    description:
      "Flexible power solutions for temporary or mobile applications.",
    products: [
      {
        id: "portable-3kw",
        title: "3kW Portable Generator",
        description:
          "Lightweight and portable for camping and small appliances.",
        image: "/images/generator2.png",
        specs: {
          power: "3kW",
          fuel: "Gasoline",
          runtime: "8 hours",
          price: "Ksh1,425,000",
        },
      },
      {
        id: "portable-5kw",
        title: "5kW Portable Generator",
        description:
          "Medium-sized portable power for RVs and construction sites.",
        image: "/images/portable-5kw.jpg",
        specs: {
          power: "5kW",
          fuel: "Gasoline",
          runtime: "10 hours",
          price: "Ksh1,500,000",
        },
      },
      {
        id: "portable-8kw",
        title: "8kW Portable Generator",
        description:
          "Heavy-duty portable power for large equipment and events.",
        image: "/images/portable-8kw.jpg",
        specs: {
          power: "8kW",
          fuel: "Gasoline / Diesel",
          runtime: "12 hours",
          price: "Ksh1,600,000",
        },
      },
    ],
  },
};

function App() {
  return (
    <main className="px-4 sm:px-6 lg:px-8  mx-auto">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured-products" element={<ProductsServices />} />
        <Route
          path="/products/:categoryId"
          element={<ProductCategory categories={categories} />}
        />
        <Route
          path="/products/:categoryId/:productId"
          element={<ProductDetail categories={categories} />}
        />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
