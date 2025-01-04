/* eslint-disable */
import { formatCurrency } from "../utils/helpers";
import Button from "../../uicomps/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";
function MenuItem({ pizza }) {
  const dispatch = useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice,
    }
    dispatch(addItem(newItem))
    
  }

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} 
      className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`} />
      <div className="flex flex-col flex-grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}
        
          {! soldOut &&<Button type='small' onClick={handleAddToCart} className="text-sm">Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
