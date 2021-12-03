import { useEffect, useState } from "react";
import styles from "../styles/Cart.module.css";
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { removeFromCart } from "../actions/Cart/index";
import axios from "axios";

export default function ProductCardCart({ id, uuid, quantity }) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    const res = await axios.get(`/api/product/${id}`);
    const data = res.data;
    setProduct(data);
  };

  const remove = async () => {
    dispatch(removeFromCart({ id: id, uuid: uuid }));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className={styles.card}>
      <Typography variant="h6">{product.name}</Typography>
      <Link href="/products/[id]" as={`/products/${id}`}>
        <img src={product.image} width={200} height={200} alt={product.name} />
      </Link>
      <Typography variant="h6">${product.price}</Typography>
      <Typography variant="h6">Quantity: {quantity}</Typography>
      <Button
        onClick={() => remove()}
        fullWidth
        variant="outlined"
        color="secondary"
      >
        Remove
      </Button>
    </div>
  );
}
