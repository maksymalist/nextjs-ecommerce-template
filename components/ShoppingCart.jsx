import { Button, Divider, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

import styles from "../styles/Cart.module.css";
import ProductCardCart from "./ProductCardCart";

import { clearCart } from "../actions/cart";
import axios from "axios";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state);

  const checkout = async () => {
    const items = cart.map((item) => {
      return {
        price: item.id,
        quantity: item.quantity,
      };
    });

    console.log(items);

    const res = await axios.post("/api/payment/checkout", {
      items: JSON.stringify(items),
    });

    window.location.href = res.data;
  };

  return (
    <div className={styles.container}>
      <Typography variant="h4">Cart</Typography>
      <Divider />
      <div className={styles.cart}>
        {cart.map((item, index) => {
          return (
            <ProductCardCart
              key={index}
              id={item.id}
              uuid={item.uuid}
              quantity={item.quantity}
            />
          );
        })}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button variant="contained" color="primary" onClick={checkout}>
          Checkout
        </Button>
        <Button
          style={{ marginLeft: "10px" }}
          variant="contained"
          color="secondary"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
}
