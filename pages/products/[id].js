import { Button, Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/Product.module.css";
import AddToCart from "../../components/AddToCart";
import axios from "axios";

export default function product({
  title,
  price,
  image,
  description,
  images,
  id,
}) {
  return (
    <div className={styles.main}>
      <div className={styles.wrap}>
        <div style={{ flex: "50%" }}>
          <div>
            <div className={styles.smallCard}>
              <img className={styles.image} src={image} alt={title} />
            </div>
          </div>
          <div className={styles.wrap}>
            {images.map((image, index) => {
              return (
                <div className={styles.smallCard} key={index}>
                  <img
                    style={{ width: "100px", height: "100px" }}
                    className={styles.image}
                    src={image}
                    alt={title}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ flex: "50%" }} className={styles.card}>
          <div className={styles.subCard}>
            <div>
              <Typography variant="h4">{title}</Typography>
              <Typography variant="h5">${price}</Typography>
              <Typography variant="h6">{description}</Typography>
            </div>

            <div>
              <AddToCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  const prod = res.data;

  return {
    props: {
      title: prod.name,
      price: prod.price,
      image: prod.image,
      description: prod.description,
      images: prod.images,
      id: prod.id,
    },
  };
}

export async function getStaticPaths() {
  const res = await axios.get("http://localhost:3000/api/products");
  const products = res.data;

  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
