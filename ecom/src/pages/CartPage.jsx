import React from 'react';

const CartPage = () => {
  // This will eventually come from context or global state
  const cartItems = [];

  return (
    <div className="min-h-screen bg-black text-yellow-200 px-6 md:px-20 py-28 font-sans">
      <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-10 text-center">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-yellow-300 text-lg">
          Your cart is empty.
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-zinc-900 to-black border border-yellow-600/20 p-6 rounded-xl flex gap-6 items-center shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-yellow-300">{item.title}</h3>
                <p className="text-sm text-yellow-500">₹{item.price}</p>
              </div>
              <div>
                <button className="text-sm px-4 py-2 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition">
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right text-xl font-semibold text-yellow-300 pt-6">
            Total: ₹{/* compute total */}0
          </div>
          <div className="text-center pt-8">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-10 rounded-full transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
