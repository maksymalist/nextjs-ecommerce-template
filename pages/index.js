import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

import BlackHoodie from "../images/BlackHoodie.png";

import Button from "@mui/material/Button";

import useMediaQuery from "@mui/material/useMediaQuery";
import ProductCard from "../components/ProductCard";

import { Typography, TextField, Link } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import ReviewCard from "../components/ReviewCard";

export default function Home() {
  const matches = useMediaQuery("(max-width:850px)");
  const [email, setEmail] = useState("");

  const handleNewsLetter = (email) => {
    console.log(email);
    //do stuff
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Blaze.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.main}>
        <div className={matches ? styles.wrap : styles.flex}>
          <div>
            <h1 className={styles.title}>
              Welcome to{" "}
              <span style={{ color: "#0070f3", textDecoration: "underline" }}>
                Blaze.
              </span>
            </h1>
            <p className={styles.description}>Get better quality for less.</p>
            <Link href="/shop">
              <Button
                style={{ color: "white" }}
                variant="contained"
                color="primary"
                size="large"
              >
                Shop Now
              </Button>
            </Link>
          </div>
          <div>
            <Image
              draggable="false"
              src={BlackHoodie}
              alt="blaze"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div>
          <Typography variant="h4" gutterBottom>
            Featured Products
          </Typography>
          <div className={styles.productCardContainer}>
            <ProductCard id="price_1K2U7pEQXAi5K2UPAZ9xwCBv" discount="10" />
            <ProductCard id="price_1K2hUGEQXAi5K2UPfB6Le9xS" discount="10" />
            <ProductCard id="price_1K2U7pEQXAi5K2UPAZ9xwCBv" discount="10" />
          </div>
        </div>
        <div
          style={{ marginTop: "100px" }}
          className={matches ? styles.wrap : styles.flex}
        >
          <div>
            <Image
              draggable="false"
              src={BlackHoodie}
              alt="blaze"
              width={500}
              height={500}
            />
          </div>
          <div style={{ maxWidth: "400px", width: "100%" }}>
            <Typography className={styles.title} variant="h2" gutterBottom>
              Our{" "}
              <span style={{ color: "#0070f3", textDecoration: "underline" }}>
                Products
              </span>
            </Typography>
            <br></br>
            <Typography variant="h4" gutterBottom>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              doloremque, quia, quaerat quisquam suum quidem dolore, quibusdam
              quis, quidem quisquam.
            </Typography>
          </div>
        </div>
        <div>
          <Swiper
            style={{ width: "1000px", height: "500px" }}
            spaceBetween={50}
            slidesPerView={3}
            freeMode
            loop
            effect="cube"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className={styles.card}>
                <Image
                  draggable="false"
                  src={BlackHoodie}
                  alt="blaze"
                  width={500}
                  height={500}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <Image
                  draggable="false"
                  src={BlackHoodie}
                  alt="blaze"
                  width={500}
                  height={500}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <Image
                  draggable="false"
                  src={BlackHoodie}
                  alt="blaze"
                  width={500}
                  height={500}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <Image
                  draggable="false"
                  src={BlackHoodie}
                  alt="blaze"
                  width={500}
                  height={500}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <Image
                  draggable="false"
                  src={BlackHoodie}
                  alt="blaze"
                  width={500}
                  height={500}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <Image
                  draggable="false"
                  src={BlackHoodie}
                  alt="blaze"
                  width={500}
                  height={500}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <Image
                  draggable="false"
                  src={BlackHoodie}
                  alt="blaze"
                  width={500}
                  height={500}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <Image
                  draggable="false"
                  src={BlackHoodie}
                  alt="blaze"
                  width={500}
                  height={500}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <Image
                  draggable="false"
                  src={BlackHoodie}
                  alt="blaze"
                  width={500}
                  height={500}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <Image
                  draggable="false"
                  src={BlackHoodie}
                  alt="blaze"
                  width={500}
                  height={500}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <Typography className={styles.title} variant="h2" gutterBottom>
            They love our{" "}
            <span style={{ color: "#0070f3", textDecoration: "underline" }}>
              Products
            </span>
          </Typography>
          <div className={styles.reviewCardContainer}>
            <ReviewCard
              name="Ava Smith"
              avatar={""}
              rating={5}
              review={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisqua doloremque, quia, quaerat quisquam suum quidem dolore, quibusdam quis,quidem quisquam."
              }
            />
            <ReviewCard
              name="Ava Smith"
              avatar={""}
              rating={5}
              review={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisqua doloremque, quia, quaerat quisquam suum quidem dolore, quibusdam quis,quidem quisquam."
              }
            />
            <ReviewCard
              name="Ava Smith"
              avatar={""}
              rating={5}
              review={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisqua doloremque, quia, quaerat quisquam suum quidem dolore, quibusdam quis,quidem quisquam."
              }
            />
            <ReviewCard
              name="Ava Smith"
              avatar={""}
              rating={5}
              review={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisqua doloremque, quia, quaerat quisquam suum quidem dolore, quibusdam quis,quidem quisquam."
              }
            />
          </div>
        </div>
        <div style={{ marginTop: "100px" }}>
          <Typography className={styles.title} variant="h2" gutterBottom>
            Subscribe to our Newsletter
          </Typography>
          <div className={styles.subscribeContainer}>
            <div className={styles.flex}>
              <TextField
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                label="Email"
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleNewsLetter(email);
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
