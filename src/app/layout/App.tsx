import { FC } from "react";
import "../style/App.css";
import { ProductsList } from "../../components/ProductsList";
import { Cart } from "../../components/Cart";

const App: FC = () => {
  return (
    <div className="App">
      <ProductsList />
      <Cart />
    </div>
  );
};

export default App;
