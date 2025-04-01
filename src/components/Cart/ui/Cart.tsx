import { FC } from "react";
import style from "./Cart.module.css";
import { CartItem } from "../../CartItem";
import { useAppDispatch, useAppSelector } from "../../../app/store/appStore";
import { hideCartPopup } from "../../../shared/store/cartSLice";

const Cart: FC = () => {
  const dispatch = useAppDispatch();

  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains(style.Popup)) {
      dispatch(hideCartPopup());
    }
  };

  const cartItems = useAppSelector((state) => state.cart.items);

  const cartTotalAmount = cartItems.reduce((sum, item) => (sum += item.product.price * item.amount), 0);
  const cartTotalSize = cartItems.reduce((sum, item) => (sum += item.amount), 0);

  return (
    <div className={style.Popup} onClick={handlePopupClick}>
      <div className={style.Cart}>
        <button className={style.Button} onClick={() => dispatch(hideCartPopup())}>
          Close
        </button>
        <h2 className={style.Title}>Your cart</h2>
        <div className={style.Container}>
          {cartItems.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
        <div className={style.Info}>
          <p className={style.Total}>Total: ${cartTotalAmount}</p>
          <p className={style.Size}>Cart size: {cartTotalSize}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
