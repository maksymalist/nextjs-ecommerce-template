import React from "react";
import ProductCard from "../components/ProductCard";
import styles from "../styles/Shop.module.css";

import BlackHoodie from "../images/BlackHoodie.png";
import { Divider, Typography } from "@mui/material";

export default function shop() {
  return (
    <div className={styles.center}>
      <div className={styles.main}>
        <Typography variant="h2">
          Our{" "}
          <span style={{ color: "#0070f3", textDecoration: "underline" }}>
            Shop
          </span>
        </Typography>
        <Divider style={{ width: "300px" }} />
        <div className={styles.grid}>
          <ProductCard id="price_1K2U7pEQXAi5K2UPAZ9xwCBv" />
          <ProductCard id="price_1K2hUGEQXAi5K2UPfB6Le9xS" />
          <ProductCard id="price_1K2U7pEQXAi5K2UPAZ9xwCBv" />
          <ProductCard id="price_1K2U7pEQXAi5K2UPAZ9xwCBv" />
          <ProductCard id="price_1K2hUGEQXAi5K2UPfB6Le9xS" />
          <ProductCard id="price_1K2U7pEQXAi5K2UPAZ9xwCBv" />
          <ProductCard id="price_1K2hUGEQXAi5K2UPfB6Le9xS" />
          <ProductCard id="price_1K2U7pEQXAi5K2UPAZ9xwCBv" />
          <ProductCard id="price_1K2hUGEQXAi5K2UPfB6Le9xS" />
          <ProductCard id="price_1K2U7pEQXAi5K2UPAZ9xwCBv" />
          <ProductCard id="price_1K2U7pEQXAi5K2UPAZ9xwCBv" />
        </div>
      </div>
    </div>
  );
}
