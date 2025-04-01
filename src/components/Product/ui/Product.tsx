import { FC } from "react";
import style from "./Product.module.css";
import { TProduct } from "../../../shared/types/types";
import { useAppDispatch } from "../../../app/store/appStore";
import { addToCart } from "../../../shared/store/cartSLice";

interface ProductProps {
  product: TProduct;
}

const Product: FC<ProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={style.Product}>
      <h2 className={style.Title}>{product.name}</h2>
      <p className={style.Price}>${product.price}</p>
      <button className={style.Button} onClick={() => dispatch(addToCart({ product }))}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
