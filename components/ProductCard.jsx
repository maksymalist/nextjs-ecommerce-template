import React from "react";
import styles from "../styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";

import { Typography, Chip, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/Cart/index";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductCard({ id, discount }) {
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const res = await axios.get(`/api/products/${id}`);
    setProduct(res.data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className={styles.card}>
      {discount && <Chip label={`${discount}% off`} color="secondary" />}
      <Link href="/products/[id]" as={`/products/${id}`}>
        <img
          draggable="false"
          src={product ? product.image : ""}
          alt="blaze"
          width={200}
          height={200}
        />
      </Link>
      <Typography variant="h6">{product ? product.title : null}</Typography>
      <Typography variant="h6">${product ? product.price : null}</Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          dispatch(
            addToCart({
              id: id,
              uuid: Math.random().toString(36).substring(2, 15),
              quantity: 1,
            })
          );
        }}
      >
        Add to cart
      </Button>
    </div>
  );
}
