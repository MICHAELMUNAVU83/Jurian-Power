import { useParams } from "react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

// Stepper UI
const Stepper = ({ step }) => (
  <div className="flex items-center justify-center gap-12 mb-8">
    {[1, 2, 3].map((n) => (
      <div key={n} className="flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold border-2 ${
            step === n
              ? "bg-green-500 text-white border-green-500"
              : step > n
              ? "bg-green-100 text-green-500 border-green-500"
              : "bg-gray-200 text-gray-400 border-gray-200"
          }`}
        >
          {n}
        </div>
      </div>
    ))}
  </div>
);

const Step1 = ({ form, handleChange, handleNext, handleExit }) => {
  const kvaOptions = [
    "5kVA",
    "10kVA",
    "15kVA",
    "20kVA",
    "30kVA",
    "40kVA",
    "50kVA",
    "100kVA",
    "200kVA",
    "Other",
  ];
  const brandOptions = [
    "Cummins",
    "Caterpillar",
    "Kohler",
    "Generac",
    "Briggs & Stratton",
    "Other/No Preference",
  ];
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleNext();
      }}
    >
      <div className="mb-6">
        <label className="block font-bold text-lg mb-2">KVA Size</label>
        <select
          name="kva"
          value={form.kva}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2 mb-4"
        >
          <option value="">Select KVA size</option>
          {kvaOptions.map((kva) => (
            <option key={kva} value={kva}>
              {kva}
            </option>
          ))}
        </select>
        <label className="block font-bold text-lg mb-2 mt-4">
          Preferred Generator Brand
        </label>
        <div className="flex flex-col gap-2 mb-4">
          {brandOptions.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="brand"
                value={brand}
                checked={form.brand === brand}
                onChange={handleChange}
                className="accent-green-500"
                required
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
        {form.brand === "Other/No Preference" && (
          <input
            type="text"
            name="brandOther"
            value={form.brandOther}
            onChange={handleChange}
            placeholder="Please specify brand (optional)"
            className="w-full border rounded px-4 py-2 mb-4"
          />
        )}
        <label className="block font-bold text-lg mb-2 mt-4">
          Additional Requirements (Optional)
        </label>
        <textarea
          name="requirements"
          value={form.requirements}
          onChange={handleChange}
          placeholder="Please provide any other additional details about your installation requirement"
          className="w-full border rounded px-4 py-2"
          rows={3}
        />
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleExit}
          className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md flex items-center gap-2"
        >
          Next <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};

const Step2 = ({ form, handleChange, handleNext, handleBack }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      handleNext();
    }}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div>
        <label className="block font-bold mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label className="block font-bold mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border rounded px-4 py-2"
          placeholder="JohnDoe@email.com"
        />
      </div>
    </div>
    <div className="mb-4">
      <label className="block font-bold mb-1">Phone Number</label>
      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        required
        className="w-full border rounded px-4 py-2"
        placeholder="+254 123456789"
      />
    </div>
    <div className="mb-4">
      <label className="block font-bold mb-1">Installation Address</label>
      <input
        type="text"
        name="address"
        value={form.address}
        onChange={handleChange}
        required
        className="w-full border rounded px-4 py-2"
        placeholder="Enter address"
      />
    </div>
    <div className="mb-6">
      <label className="block font-bold mb-1">
        Preferred Installation Date (approximate)
      </label>
      <input
        type="text"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
        placeholder="dd/mm/yy"
        className="w-full border rounded px-4 py-2"
      />
    </div>
    <div className="flex justify-between">
      <button
        type="button"
        onClick={handleBack}
        className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md"
      >
        Back
      </button>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md flex items-center gap-2"
      >
        Review Request <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </form>
);

const Step3 = ({ form, handleBack, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className="mb-6">
      <h3 className="font-bold text-lg mb-4">
        Please review your information:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="mb-2">
            <span className="font-semibold">KVA Size</span>
            <br />
            {form.kva}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Preferred Brand</span>
            <br />
            {form.brand === "Other/No Preference"
              ? form.brandOther || form.brand
              : form.brand}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Name</span>
            <br />
            {form.name}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Phone</span>
            <br />
            {form.phone}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Installation Address</span>
            <br />
            {form.address || "No address yet"}
          </div>
        </div>
        <div>
          <div className="mb-2">
            <span className="font-semibold">Email</span>
            <br />
            {form.email}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Installation Date</span>
            <br />
            {form.date}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Additional Requirements</span>
            <br />
            {form.requirements || "-"}
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-between">
      <button
        type="button"
        onClick={handleBack}
        className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md"
      >
        Back
      </button>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md flex items-center gap-2"
      >
        Submit Request <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </form>
);

const Confirmation = () => (
  <div className="text-center py-12">
    <h2 className="text-2xl font-bold text-green-600 mb-4">
      Request Submitted!
    </h2>
    <p className="mb-6">
      Thank you for your request. Our team will contact you soon to discuss your
      generator installation.
    </p>
  </div>
);

const WhyChoose = () => (
  <div className="bg-white rounded-lg shadow-md p-6 mt-8">
    <h3 className="text-xl font-bold mb-2">
      Why Choose Jarian Power for Generator Installation?
    </h3>
    <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
      <li>✓ Professional installation by certified technicians</li>
      <li>✓ Comprehensive warranty on parts and labor</li>
      <li>✓ Follow-up service to ensure optimal performance</li>
      <li>✓ Customized solutions for your specific power needs</li>
      <li>✓ Financing options available</li>
    </ul>
  </div>
);

// Multi-step form for Generator Purchase & Installation
const GeneratorInstallationForm = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    kva: "",
    brand: "",
    brandOther: "",
    requirements: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  // For back button on step 1
  const handleExit = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or API
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-green-500 hover:text-green-600 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Generator Purchase{" "}
          <span className="italic text-green-500">& Installation</span>
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Let us help you find the right generator and install it
          professionally.
        </p>
        <Stepper step={step} />
        <div className="bg-white rounded-lg shadow-lg p-8 mb-4">
          {submitted ? (
            <Confirmation />
          ) : step === 1 ? (
            <Step1
              form={form}
              handleChange={handleChange}
              handleNext={handleNext}
              handleExit={handleExit}
            />
          ) : step === 2 ? (
            <Step2
              form={form}
              handleChange={handleChange}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          ) : (
            <Step3
              form={form}
              handleBack={handleBack}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
        <WhyChoose />
      </div>
    </div>
  );
};

const maintenancePlaceholder = {
  title: (
    <>
      Maintenance <span className="italic text-green-500">Contract</span>
    </>
  ),
  description:
    "Regular maintenance to ensure your power equipment runs smoothly and extends its lifespan. Our contracts offer peace of mind with scheduled service visits.",
  image: "/images/image1.png",
  features: [
    "Comprehensive generator inspection and testing",
    "Regular oil and filter changes",
    "Battery testing and maintenance",
    "Cooling system inspection and service",
    "Fuel system maintenance and testing",
    "Control panel and electrical system checks",
  ],
  benefits: [
    "Extends generator lifespan and reliability",
    "Reduces unexpected breakdowns and downtime",
    "Prioritized service during emergency situations",
    "Maintains warranty compliance",
    "Predictable maintenance costs with no surprises",
    "Professional documentation of all service history",
  ],
};

const serviceData = {
  maintenance: maintenancePlaceholder,
  "generator-installation": {
    title: "Generator Purchase & Installation",
    description:
      "Let us help you find the right generator and install it professionally.",
    image: "/images/generator-installation.jpg",
    features: [],
    benefits: [],
  },
  installation: maintenancePlaceholder,
  "emergency-support": maintenancePlaceholder,
  consultation: maintenancePlaceholder,
  documentation: maintenancePlaceholder,
  "customer-support": maintenancePlaceholder,
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) {
    return <div className="text-center py-20">Service not found.</div>;
  }

  // Conditionally render the multi-step form for generator installation
  if (serviceId === "generator-installation") {
    return <GeneratorInstallationForm />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {service.title}
            </h1>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md inline-flex items-center transition-colors duration-300">
              Request quote <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={service.image}
              alt={
                typeof service.title === "string" ? service.title : "Service"
              }
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✔️</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Benefits</h2>
            <ul className="space-y-3">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✔️</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
