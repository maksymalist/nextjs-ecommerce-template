import React from "react";
import { Typography, Avatar, Rating } from "@mui/material";
import styles from "../styles/Home.module.css";

export default function ReviewCard({ name, avatar, rating, review }) {
  return (
    <div className={styles.card}>
      <div className={styles.alignCenter}>
        <Avatar src={avatar} alt={name}>
          {name.charAt(0)}
        </Avatar>
        <div style={{ margin: "10px" }}>
          <Rating
            style={{ color: "#0070f3" }}
            name="read-only"
            value={rating}
            readOnly
          />
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
        </div>
      </div>
      <Typography variant="body2" gutterBottom>
        {review}
      </Typography>
    </div>
  );
}
