import Home from "@/components/Home";
import FoodDetails from "@/components/FoodDetails";
import Cart from "@/components/Cart";
import Favorites from "@/components/Favorites";

export default [
  { path: "/", component: Home },
  { path: "/food-details", name: "food-details", component: FoodDetails },
  { path: "/cart", component: Cart },
  { path: "/favorites", component: Favorites },
];
