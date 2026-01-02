// src/data/menuData.ts
import burger from "../assets/Images/burger1.png";
import pizza from "../assets/Images/pizza.png";
import farmhousepizza from "../assets/Images/pizzafarmhouse.png"
import cheeseBurger from "../assets/Images/burgercheese.png"
import Chocoshake from "../assets/Images/chocolateShake.png"
import Oreo from "../assets/Images/oreo.png"

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  details:string;
  price: number;
  image: string;
  isVeg: boolean;
  category: string;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Fresh & juicy grilled patty",
    details: "loaded with extra goodness and healthy veggies comes with 15g of protien ",
    price: 109,
    image: burger,
    isVeg: false,
    category: "burger",
    
  },
  {
    id: 2,
    name: "Cheese Burger",
    description: "Loaded with melted cheese",
    details: "loaded with extra goodness and healthy veggies comes with 15g of protien ",
    price: 129,
    image: cheeseBurger,
    isVeg: false,
    category: "burger",
  },
  {
    id: 3,
    name: "Veg Burger",
    description: "Crispy veg patty & fresh veggies",
    details: "loaded with extra goodness and healthy veggies comes with 15g of protien ",
    price: 99,
    image: burger,
    isVeg: true,
    category: "burger",
  },

  // 🍕 Pizza
  {
    id: 4,
    name: "Cheese Pizza",
    description: "Loaded with mozzarella cheese",
    details: "loaded with extra goodness and healthy veggies comes with 15g of protien ",
    price: 199,
    image: pizza,
    isVeg: true,
    category: "pizza",
  },
  {
    id: 5,
    name: "Farmhouse Pizza",
    description: "Onion, capsicum & sweet corn",
    details: "loaded with extra goodness and healthy veggies comes with 15g of protien ",
    price: 229,
    image: farmhousepizza,
    isVeg: true,
    category: "pizza",
  },

  // 🍫 Shakes
  {
    id: 6,
    name: "Chocolate Shake",
    description: "Rich & creamy chocolate shake",
    details: "loaded with dark chocolate and chocolate fillings ",
    price: 149,
    image: Chocoshake,
    isVeg: true,
    category: "drinks",
  },
  {
    id: 7,
    name: "Oreo Shake",
    description: "Crunchy Oreo blended shake",
    details : "a fusion of oreo and the chocolate with milky texture",
    price: 169,
    image: Oreo,
    isVeg: true,
    category: "drinks",
  },

//   // 🍟 Fries
//   {
//     id: 8,
//     name: "Classic Fries",
//     description: "Crispy golden fries",
//     price: 89,
//     image: fries,
//     isVeg: true,
//   },
//   {
//     id: 9,
//     name: "Peri Peri Fries",
//     description: "Spicy peri-peri masala",
//     price: 109,
//     image: periFries,
//     isVeg: true,
//   },
//   {
//     id: 10,
//     name: "Cheesy Fries",
//     description: "Fries topped with cheese sauce",
//     price: 129,
//     image: fries,
//     isVeg: true,
//   },

  // ☕ Drinks
  {
    id: 11,
    name: "Cold Coffee",
    description: "Chilled & creamy coffee",
    details:"................................",
    price: 129,
    image: Oreo,
    isVeg: true,
    category: "drinks",
  },

//   // 🍰 Desserts
//   {
//     id: 12,
//     name: "Chocolate Brownie",
//     description: "Warm & fudgy brownie",
//     price: 149,
//     image: brownie,
//     isVeg: true,
//   },
//   {
//     id: 13,
//     name: "Vanilla Ice Cream",
//     description: "Classic creamy vanilla scoop",
//     price: 99,
//     image: iceCream,
//     isVeg: true,
//   },
];
