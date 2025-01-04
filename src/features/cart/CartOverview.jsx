import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if(!totalCartQuantity) return null;
  return (
    <div className="bg-stone-700 text-stone-200 p-4 uppercase sm:px-6 flex items-center justify-between">
      <p className="text-stone-300 space-x-4 font-semibold sm:space-x-6 text-sm md:text-base">
        <span>{totalCartQuantity} pizzas</span>
        <span>{totalCartPrice} $</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
