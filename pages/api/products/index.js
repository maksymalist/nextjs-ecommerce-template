import products from "../../../products.json";

export default function handler(req, res) {
  const keys = Object.keys(products);
  const productArray = keys.map((product) => {
    return products[product];
  });

  res.json(productArray);
}
