import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../Redux/Slices/CartSlice";
import { toast } from "react-toastify";

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const url_api = `https://fakestoreapi.com/products/${id}`;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart || []);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const res = await fetch(url_api);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
      setProduct(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const AddToCart = (item) => {
    dispatch(add(item));
    toast.success("Item added to cart");
  };

  const removeItemFromCart = (id) => {
    dispatch(remove(id));
    toast.warn("Item removed from cart");
  };

  const isInCart = product && cart.some((p) => p.id === product.id);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 underline text-sm mb-4"
      >
        ← Go Back
      </button>

      {loading ? (
        <h1 className="text-center text-xl">Loading...</h1>
      ) : product ? (
        <div className="max-w-2xl mx-auto bg-white shadow p-6 rounded">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={product.image}
              alt={product.title}
              className="w-full md:w-1/2 object-contain h-64 bg-gray-50 p-4 rounded"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
              <p className="text-gray-700 mb-4">{product.description}</p>

              <div className="text-sm text-gray-700 mb-4">
                <span>⭐ {product.rating?.rate ?? 0} ({product.rating?.count ?? 0} reviews)</span>
              </div>

              <div className="text-lg font-semibold text-indigo-600 mb-4">
                ${product.price?.toFixed(2)}
              </div>

              {isInCart ? (
                <button
                  onClick={() => removeItemFromCart(product.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() => AddToCart(product)}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-xl text-red-500">No product found</h1>
      )}
    </div>
  );
}

export default ProductPage;
