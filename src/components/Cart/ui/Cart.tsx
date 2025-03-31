import { FC } from "react";
import style from "./Cart.module.css";
import { CartItem } from "../../CartItem";

const Cart: FC = () => {
  return (
    <div className={style.Popup}>
      <div className={style.Cart}>
        <h2 className={style.Title}>Your cart</h2>
        <div className={style.Container}>
          <CartItem />
        </div>
        <div className={style.Info}>
          <p className={style.Total}>Total: $100</p>
          <p className={style.Size}>Cart size: 10</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
