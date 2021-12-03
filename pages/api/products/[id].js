import products from "../../../products.json";

export default function handler(req, res) {
  const id = req.query.id;
  const product = products[id];
  res.json(product);
}
