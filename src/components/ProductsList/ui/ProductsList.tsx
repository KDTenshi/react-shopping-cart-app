import { FC } from "react";
import style from "./ProductsList.module.css";
import { Product } from "../../Product";
import { TProduct } from "../../../shared/types/types";

const ProductsList: FC = () => {
  const list: TProduct[] = [
    { id: "001", name: "Product 1", price: 100 },
    { id: "002", name: "Product 2", price: 200 },
    { id: "003", name: "Product 3", price: 300 },
    { id: "004", name: "Product 4", price: 400 },
    { id: "005", name: "Product 5", price: 500 },
    { id: "006", name: "Product 6", price: 600 },
  ];

  return (
    <div className={style.Wrapper}>
      <h2 className={style.Title}>Products List</h2>
      <div className={style.List}>
        {list.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
