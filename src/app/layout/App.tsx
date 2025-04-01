import { FC } from "react";
import "../style/App.css";
import { ProductsList } from "../../components/ProductsList";
import { Cart } from "../../components/Cart";
import { useAppSelector } from "../store/appStore";
import { CartButton } from "../../components/CartButton";

const App: FC = () => {
  const isCartShown = useAppSelector((state) => state.cart.isShown);

  return (
    <div className="App">
      <CartButton />
      <ProductsList />
      {isCartShown && <Cart />}
    </div>
  );
};

export default App;
