import { FC } from "react";
import style from "./CartItem.module.css";
import { TCartItem } from "../../../shared/types/types";
import { useAppDispatch } from "../../../app/store/appStore";
import { decreaseCartItemAmount, deleteFromCart, increaseCartItemAmount } from "../../../shared/store/cartSLice";

interface CartItemProps {
  item: TCartItem;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={style.Item}>
      <div className={style.Info}>
        <h2 className={style.Title}>{item.product.name}</h2>
        <p className={style.Price}>${item.product.price}</p>
      </div>
      <div className={style.Controls}>
        <button className={style.Button} onClick={() => dispatch(decreaseCartItemAmount({ id: item.product.id }))}>
          -
        </button>
        <p className={style.Amount}>{item.amount}</p>
        <button className={style.Button} onClick={() => dispatch(increaseCartItemAmount({ id: item.product.id }))}>
          +
        </button>
        <button className={style.Button} onClick={() => dispatch(deleteFromCart({ id: item.product.id }))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
