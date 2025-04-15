import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem";

function Cart() {
  const cart = useSelector((state) => state.cart || []);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((sum, item) => sum + item.price * item.quantity, 0));
  }, [cart]);



  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      {cart.length > 0 ? (
        <div className="bg-white max-w-4xl mx-auto shadow-md rounded-lg p-6">
          <div className="space-y-6">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-2xl font-bold mb-2">Your Cart Summary</h2>
            <p className="text-lg mb-1">Total items: {cart.length}</p>
            <p className="text-lg font-bold mb-4">Total Amount: ${totalAmount.toFixed(2)}</p>

            <button className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 text-lg">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-2xl font-semibold">Your cart is empty</h1>
      )}
    </div>
  );
}

export default Cart;
