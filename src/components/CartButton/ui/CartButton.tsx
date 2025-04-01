import { FC } from "react";
import style from "./CartButton.module.css";
import { useAppDispatch } from "../../../app/store/appStore";
import { showCartPopup } from "../../../shared/store/cartSLice";

const CartButton: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <button onClick={() => dispatch(showCartPopup())} className={style.Button}>
      Cart
    </button>
  );
};

export default CartButton;
