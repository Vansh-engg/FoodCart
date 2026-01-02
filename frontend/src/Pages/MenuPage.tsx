import MenuCard from "../Components/MenuCard";
import { useState } from "react";
import { menuItems } from "../Data/MenuItems";
import type { MenuItem } from "../Data/MenuItems";
import Button from "../Components/Button";
import { useCart } from "../Context/CartContext";

import type { CartItem } from "../Types/Cart";


export default function Menu() {
  const { cart, setCart } = useCart();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [category, setCategory] = useState<string>("all");

  // FILTERING
  const filterItems =
    category === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  const handleAddToCart = (item: Omit<CartItem, "qty">) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);

      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };
  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-transparent p-5">
      <div className="grid grid-cols-12 gap-4">
        {/* Left Quick Menu */}
        <aside className="col-span-2 bg-white/80 rounded-2xl shadow p-4 min-h-[300px] h-fit">
          <h3 className="font-semibold mb-4">Quick Menu</h3>
          <ul className="space-y-3 text-sm">
            <li
              onClick={() => setCategory("all")}
              className={`cursor-pointer ${
                category === "all" ? "text-orange-500 font-medium" : ""
              }`}
            >
              🍟 All
            </li>
            <li
              onClick={() => setCategory("burger")}
              className={`cursor-pointer ${
                category === "burger" ? "text-orange-500 font-medium" : ""
              }`}
            >
              🍔 Burgers
            </li>
            <li
              onClick={() => setCategory("pizza")}
              className={`cursor-pointer ${
                category === "pizza" ? "text-orange-500 font-medium" : ""
              }`}
            >
              🍕 Pizza
            </li>

            <li
              onClick={() => setCategory("drinks")}
              className={`cursor-pointer ${
                category === "drinks" ? "text-orange-500 font-medium" : ""
              }`}
            >
              🥤 Drinks
            </li>

            <li
              onClick={() => setCategory("snacks")}
              className={`cursor-pointer ${
                category === "snacks" ? "text-orange-500 font-medium" : ""
              }`}
            >
              🍟 Snacks
            </li>

            <li
              onClick={() => setCategory("desserts")}
              className={`cursor-pointer ${
                category === "desserts" ? "text-orange-500 font-medium" : ""
              }`}
            >
              🍰 Desserts
            </li>
          </ul>
        </aside>

        {/* Main menu cards */}
        <main className="col-span-7 bg-white/50 rounded-2xl shadow p-5 pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-6">
            {filterItems.map((item) => (
              <MenuCard
                key={item.id}
                {...item}
                onAdd={handleAddToCart}
                onCardClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        </main>

        {/* Right Cart */}
        <aside className="col-span-3 bg-white/80 rounded-2xl shadow p-4 flex flex-col min-h-[500px] h-fit">
          <h3 className="font-berkshire text-3xl mb-4 text-center">Cart</h3>

          {cart.length === 0 && (
            <p className="text-2xl font-serif text-gray-500 text-center">
              Opps!!Cart is empty
            </p>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-3"
            >
              {/* Left: Image + Name */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 object-cover rounded"
                />

                <div>
                  <p className="text-sm font-medium">{item.name}</p>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      −
                    </button>

                    <span className="text-sm">{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Right cart */}
              <div className="flex flex-col items-end gap-1">
                <span className="text-sm font-semibold">
                  ₹{item.price * item.qty}
                </span>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-xs text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex-1"></div>
          <h1 className="text-sm text-gray-500 text-center p-2">
            GST will be calculated at checkout.
          </h1>
          <Button label="Checkout" />
        </aside>

        {selectedItem && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 ">
            <div className="bg-white/80 rounded-xl p-6 w-[40%] grid grid-cols-3 gap-4">
              <img
                src={selectedItem.image}
                className="w-50 h-50 object-cover rounded mt-2 col-span-1"
              />
              <div className="col-span-2 bg-white rounded-2xl p-5">
                <h2 className="text-xl font-bold text-center">
                  {selectedItem.name}
                </h2>

                <p className="text-center p-5">{selectedItem.details}</p>
                <p className="mt-2 text-2xl text-center">
                  ₹{selectedItem.price}
                </p>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="mt-4 w-full bg-orange-500 text-white py-2 rounded col-span-3"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
