import type { CartItem } from "../Types/Cart";
type MenuCardProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg?: boolean;
  onAdd: (item: {
    id: number;
    name: string;
    price: number;
    image: string;
  }) => void;
  onCardClick: () => void;
};

export default function MenuCard({
  id,
  name,
  description,
  price,
  image,
  isVeg = true,
  onAdd,
  onCardClick,
}: MenuCardProps) {
  return (
    <div
      onClick={onCardClick}
      className="relative bg-white rounded-3xl shadow-md pt-24 pb-6 px-4 text-center"
    >
      {/* Image */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 object-cover w-40 h-40  ">
        <img src={image} alt={name} className=" object-cover bg-transparent" />
      </div>

      {/* Veg / Non-Veg Indicator */}
      <div className="absolute top-3 right-3 text-sm">
        <span className={isVeg ? "text-green-600" : "text-red-600"}>●</span>
      </div>

      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{description}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-orange-500">₹{price}</span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onAdd({ id, name, price, image });
          }}
          className="bg-orange-500 text-white px-4 py-1 rounded-full hover:bg-orange-600"
        >
          Add
        </button>
      </div>
    </div>
    
  );
}
