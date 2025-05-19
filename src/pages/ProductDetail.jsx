import { useParams, useNavigate } from "react-router";
import { ArrowLeft, ChevronDown, ArrowRight } from "lucide-react";

const ProductDetail = ({ categories }) => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();

  const product = categories[categoryId]?.products.find(
    (p) => p.id === productId
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Product not found
          </h1>
          <button
            onClick={() => navigate(`/products/${categoryId}`)}
            className="mt-4 text-green-500 hover:text-green-600"
          >
            Return to Category
          </button>
        </div>
      </div>
    );
  }

  // Example extra fields for demo (replace with real data as needed)
  const detailsList = [
    { label: "Power Output", value: product.specs?.power || "-" },
    { label: "Fuel Type", value: product.specs?.fuel || "-" },
    {
      label: "Engine",
      value:
        product.specs?.engine ||
        "Cummins 4BTAA3.3-G14, 4-cylinder, turbocharged, water-cooled",
    },
    { label: "Phase Type", value: product.specs?.phase || "Three-phase" },
    { label: "Price", value: product.specs?.price || product.price || "-" },
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(`/products/${categoryId}`)}
          className="flex items-center text-green-500 hover:text-green-600 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </button>
        <h1 className="text-3xl font-bold text-black mb-6">
          Product Information
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-md h-auto object-contain rounded shadow"
            />
          </div>
          <div className="md:w-1/2 bg-white rounded-lg border border-gray-300 p-6 flex flex-col gap-4 shadow-sm">
            <h2 className="text-2xl font-bold mb-2 text-black">
              {product.title}
            </h2>
            <ul className="mb-2 text-base text-gray-800">
              {detailsList.map((item, idx) => (
                <li key={idx} className="mb-1 flex flex-wrap">
                  <span className="font-semibold mr-2">{item.label}:</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
            {/* Accordions */}
            <div className="divide-y border border-gray-300 rounded mb-4">
              <details className="group p-0">
                <summary className="flex items-center justify-between cursor-pointer px-4 py-3 font-semibold text-gray-900">
                  Full Technical Specifications
                  <ChevronDown className="w-5 h-5 transform group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="px-4 pb-4 pt-2 flex flex-col gap-2">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="pl-2">
                      <span className="font-medium text-gray-700">
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </span>
                      <span className="ml-2 text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </details>
              <details className="group p-0">
                <summary className="flex items-center justify-between cursor-pointer px-4 py-3 font-semibold text-gray-900">
                  Key Features
                  <ChevronDown className="w-5 h-5 transform group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <ul className="px-4 pb-4 pt-2 list-disc list-inside space-y-2">
                  {(product.features || []).map((feature, index) => (
                    <li key={index} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </details>
              <details className="group p-0">
                <summary className="flex items-center justify-between cursor-pointer px-4 py-3 font-semibold text-gray-900">
                  Application / Use Cases
                  <ChevronDown className="w-5 h-5 transform group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="px-4 pb-4 pt-2 text-gray-700">
                  {product.useCases ||
                    "Contact us for more information about use cases for this product."}
                </div>
              </details>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md inline-flex items-center transition-colors duration-300 self-start mt-2">
              Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
