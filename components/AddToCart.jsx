import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/Cart/index";
import { Button, Typography } from "@mui/material";

export default function DispatchButton() {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        fullWidth
        variant="contained"
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
