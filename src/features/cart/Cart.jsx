/* eslint-disable */
import { Link } from 'react-router-dom';
import Button from '../../uicomps/Button';
import LinkButton from '../../uicomps/LinkButton';
import CartItem from './CartItem';
import { useSelector,useDispatch  } from 'react-redux';
import { getCart,clearCart } from './cartSlice';
import EmptyCart from './EmptyCart';


function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  console.log(cart,"cart");

  if(!cart.length){
    return <EmptyCart />
  }
  return (
    <div className='px-4 py-3'>
      <LinkButton to="/menu" >&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {username}</h2>
      <ul className='mt-3 divide-y divide-stone-200 border-b'>
        {cart.map(item => {
         return <CartItem item={item} key={item.key} />
        })}
      </ul>

      <div className='mt-6 space-x-2'>
        <Button to="/order/new" type={'primary'}>Order pizzas</Button>    
        <Button type={'secondary'} onClick={() => dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
