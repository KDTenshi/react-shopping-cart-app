export type TProduct = {
  id: string;
  name: string;
  price: number;
};

export type TCartItem = {
  product: TProduct;
  amount: number;
};
