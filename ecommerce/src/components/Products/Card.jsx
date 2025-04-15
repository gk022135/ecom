import { useDispatch, useSelector } from "react-redux";
import Details from "./Details";
import ImageProduct from "./ImageProduct";
import { add, remove } from "../../Redux/Slices/CartSlice";
import { toast } from "react-toastify";

function Card({ product }) {
  const cart = useSelector((state) => state.cart); // Get cart from Redux state
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(add(item));
    toast.success("Item added to cart");
  };

  const handleRemoveFromCart = (id) => {
    dispatch(remove(id));
    toast.warn("Item removed from cart");
  };

  // Handle edge cases
  if (!product) return <h1 className="text-center text-xl">No Product Found</h1>;
  if (Array.isArray(product) && product.length === 0) return <h1 className="text-center text-xl">No Products Found</h1>;

  // If product is an array of items
  if (Array.isArray(product)) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-6">
        {product.map((item) => {
          const isInCart = cart.some((p) => p.id === item.id);

          return (
            <div key={item.id} className="p-4 border rounded shadow-md bg-white flex flex-col">
              <ImageProduct image={item.image} />
              <Details
                title={item.title}
                description={item.description}
                rating={item.rating}
                price={item.price}
                id={item.id}
              />
              <div className="mt-auto pt-4">
                {isInCart ? (
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // If product is a single object
  const isInCart = cart.some((p) => p.id === product.id);

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-md bg-white">
      <ImageProduct image={product.image} />
      <Details
        title={product.title}
        description={product.description}
        rating={product.rating}
        price={product.price}
        id={product.id}
      />
      <div className="mt-4">
        {isInCart ? (
          <button
            onClick={() => handleRemoveFromCart(product.id)}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
