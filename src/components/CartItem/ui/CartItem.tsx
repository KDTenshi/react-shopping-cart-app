import { FC } from "react";
import style from "./CartItem.module.css";

const CartItem: FC = () => {
  return (
    <div className={style.Item}>
      <div className={style.Info}>
        <h2 className={style.Title}>Product Title</h2>
        <p className={style.Price}>$100</p>
      </div>
      <div className={style.Controls}>
        <button className={style.Button}>-</button>
        <p className={style.Amount}>10</p>
        <button className={style.Button}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
