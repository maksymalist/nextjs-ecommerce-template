import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Typography } from "@mui/material";

export default function about() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Typography className={styles.title} variant="h2" gutterBottom>
          About{" "}
          <span style={{ color: "#0070f3", textDecoration: "underline" }}>
            Us
          </span>
        </Typography>
        <br></br>
        <Typography variant="h4" gutterBottom>
          We are a team of designers and developers that create high-quality
          <br></br>
          products.
        </Typography>
        <br></br>
        <Typography
          style={{ width: "100%", maxWidth: "650px", textAlign: "center" }}
          variant="h6"
          gutterBottom
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus
          eros risus, in lacinia odio placerat id. Nam ac risus lacus. Cras sit
          amet ultricies justo, nec luctus purus. Suspendisse egestas tortor et
          vestibulum tempor. Morbi pharetra eros vehicula ipsum bibendum, ac
          aliquet nibh imperdiet. Donec a fermentum ligula. Vivamus dignissim
          magna libero, eget mollis lectus venenatis in. Aliquam finibus, mauris
          a gravida sollicitudin, velit leo tempor ante, quis sodales eros arcu
          non metus.
        </Typography>
      </main>
    </div>
  );
}
