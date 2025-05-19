import { useParams, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

const ProductCategory = ({ categories }) => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = categories[categoryId];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Category not found
          </h1>
          <button
            onClick={() => navigate("/featured-products")}
            className="mt-4 text-green-500 hover:text-green-600"
          >
            Return to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate("/featured-products")}
          className="flex items-center text-green-500 hover:text-green-600 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {category.title}
          </h1>
          <p className="text-gray-600">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/products/${categoryId}/${product.id}`)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex flex-col gap-2 text-sm">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key}>
                      <span className="font-medium text-gray-700">
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </span>
                      <span
                        className={`ml-1 text-gray-600 ${
                          key === "price" ? "font-bold" : ""
                        }`}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
