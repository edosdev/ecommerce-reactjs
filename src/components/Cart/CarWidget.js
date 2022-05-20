import  './CartWidget.css';
import { ShoppingCartIcon } from "@heroicons/react/outline";


const CartWidget = () => {
  return (
    <div className="cart-container ml-10 mr-5">
      <ShoppingCartIcon className="h-10 w-10  text-white" />
      <div className="contador-cart text-color1">1</div>
    </div>
  );
};

export default CartWidget;
