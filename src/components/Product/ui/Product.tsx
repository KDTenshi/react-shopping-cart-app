import { FC } from "react";
import style from "./Product.module.css";
import { TProduct } from "../../../shared/types/types";

interface ProductProps {
  product: TProduct;
}

const Product: FC<ProductProps> = ({ product }) => {
  return (
    <div className={style.Product}>
      <h2 className={style.Title}>{product.name}</h2>
      <p className={style.Price}>${product.price}</p>
      <button className={style.Button}>Add to cart</button>
    </div>
  );
};

export default Product;
