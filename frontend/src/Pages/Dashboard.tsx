import Burger from "../assets/Images/burger.jpg";
import Egg from "../assets/Images/egg.png";
import {  useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function Dash() {
  const navigate = useNavigate();


  return (

    <div
      id="home"
      className="flex flex-col items-center justify-center gap-6 px-4"
    >
      <h1 className="font-berkshire [text-shadow:2px_4px_8px_rgba(0,0,0,0.4)] text-6xl md:text-8xl pt-20">
        The FoodCart
      </h1>
      <h2 className="text-xl md:text-2xl font-serif">
        The taste in every bite
      </h2>

      <div className="relative w-full max-w-5xl sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
        <img src={Egg} alt="main egg" className="w-full h-auto rounded-2xl" />
        <button
          onClick={() => navigate("/menu")}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[80%] bg-white hover:bg-orange-500 px-5 py-2 rounded-full font-medium text-black transition hidden md:block "
        >
          Order Now..
        </button>
      </div>
      {/* <section id="about"> */}
      <div
        id="about"
        className="bg-white/80 w-full px-4 py-8 rounded-2xl max-w-full mx-auto "
      >
        {/* <h1 className="font-serif [text-shadow:2px_4px_8px_rgba(0,0,0,0.4)] text-2xl md:text-4xl text-left">
          About
        </h1> */}

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <img
              src={Burger}
              alt="about image"
              className="rounded-2xl w-full"
            />
          </div>

          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 font-serif text-center">
              Fresh and Tasty Food
            </h2>

            <p className="font-serif text-center text-2xl">
              We believe great food begins with fresh ingredients and ends with
              unforgettable flavors. Every dish is carefully prepared to bring
              you the perfect balance of taste, quality, and comfort. From the
              first bite to the last, our food is crafted to satisfy your
              cravings and lift your mood.
            </p>
            <p className="font-serif text-center text-2xl">
              Our chefs focus on simple recipes done right—using handpicked
              ingredients, authentic techniques, and a passion for excellence.
              Whether you’re stopping by for a quick bite or enjoying a relaxed
              meal, we promise flavors that feel familiar yet exciting.
            </p>
            <p className="font-serif text-center text-2xl">
              Good food isn’t just about eating—it’s about enjoying the moment.
              And that’s exactly what we serve, every single time.
            </p>
          </div>
        </div>
      </div>
      {/* </section> */}
    </div>
  );
}
