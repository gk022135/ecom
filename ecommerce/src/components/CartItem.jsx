import { useDispatch } from "react-redux";
import { remove, incrementQuantity, decrementQuantity } from "../Redux/Slices/CartSlice";
import { toast } from "react-toastify";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from cart");
  };

  const increaseQty = () => {
    dispatch(incrementQuantity(item.id));
  };

  const decreaseQty = () => {
    if (item.quantity === 1) {
      removeFromCart();
    } else {
      dispatch(decrementQuantity(item.id));
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between p-4 border rounded shadow-md bg-white">
      {/* Image */}
      <div className="w-32 h-32 mb-4 sm:mb-0">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded" />
      </div>

      {/* Details */}
      <div className="flex-1 sm:ml-6 text-center sm:text-left">
        <h1 className="text-lg font-semibold">{item.title}</h1>
        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
        <p className="text-gray-800 font-bold mt-2">${item.price.toFixed(2)}</p>
      </div>

      {/* Quantity + Delete */}
      <div className="flex flex-col items-center gap-2 mt-4 sm:mt-0">
        <div className="flex items-center gap-2">
          <button
            onClick={decreaseQty}
            className="bg-gray-300 px-2 rounded text-lg hover:bg-gray-400"
          >
            −
          </button>
          <span className="font-semibold">{item.quantity}</span>
          <button
            onClick={increaseQty}
            className="bg-gray-300 px-2 rounded text-lg hover:bg-gray-400"
          >
            +
          </button>
        </div>
        <button
          onClick={removeFromCart}
          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;
