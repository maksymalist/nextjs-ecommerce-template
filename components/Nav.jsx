import styles from "../styles/Nav.module.css";
import Link from "next/link";
import {
  Badge,
  Menu,
  MenuItem,
  Button,
  ClickAwayListener,
} from "@mui/material";
import { ShoppingBag, AccountCircleOutlined } from "@mui/icons-material";
import { useState } from "react";

import { useUser } from "@auth0/nextjs-auth0";
import Cart from "./ShoppingCart";
import { useSelector } from "react-redux";

const Nav = () => {
  const { user, error, isLoading } = useUser();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [cartOpen, setCartOpen] = useState(false);
  const cart = useSelector((state) => state);

  return (
    <div className={styles.nav}>
      <div className={styles.leftLinks}>
        <li className={styles.liMargin}>
          <Link href="/">
            <svg
              width="140"
              height="45"
              viewBox="0 0 140 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.14601 45L13.9453 0H22.353C28.0504 0 29.3226 3.6 28.161 10.0687L27.9951 11.25C27.3313 15.1312 25.8932 18.1687 24.5103 20.3625L24.455 20.5875C26.225 22.3312 26.8888 25.7625 26.1697 31.725L25.8378 33.525C24.0125 41.4563 21.3574 45 15.66 45H6.14601V45ZM16.1579 19.125H19.0342C20.583 19.125 22.0212 17.2688 23.0721 11.25L23.2381 10.0687C24.0125 5.7375 23.2381 4.5 21.5786 4.5H18.7023L16.1579 19.125ZM12.6731 39.375H16.6557C18.3151 39.375 19.698 37.9688 20.6936 33.525L21.0255 31.725C21.9658 25.0312 21.0255 23.625 19.3661 23.625H15.3835L12.6731 39.375ZM27.7185 45L35.5178 0H41.0492L34.2456 39.375H41.4364L40.4408 45H27.7185Z"
                fill="white"
              />
              <path
                d="M67.3429 0L66.4203 1.6239L64.3089 5.35886L64.0072 5.90016L64.3089 6.44146L78.9292 32.1893H65.4977H64.8766L64.575 32.7306L62.4636 36.4836L61.5409 38.0894H63.3685L87.1442 38.1075L88.9718 38.0894L88.0491 36.4655L68.2656 1.6239L67.3429 0ZM63.4217 6.91059L62.4991 8.53448L42.7155 43.3941L41.7929 45H43.6382H47.8788H48.4998L48.8014 44.4587L63.4217 18.7109L70.1463 30.5293L70.4302 31.0706H71.0512H75.2918H77.1371L76.2145 29.4647L64.3444 8.53448L63.4217 6.91059ZM63.3507 20.84L62.4458 22.4639L50.558 43.3761L49.6353 45H51.4806H91.0655H92.893L91.9704 43.3761L89.8589 39.6411L89.5396 39.0998H88.9363H59.6957L66.4026 27.2815L66.7042 26.7402L66.4026 26.1989L64.2734 22.4639L63.3507 20.84Z"
                fill="white"
              />
              <path
                d="M93.4194 45L110.401 4.5H101.551L102.325 0H117.813L101.329 39.375H109.903L108.907 45H93.4194V45ZM113.332 45L121.132 0H133.854L133.08 4.5H125.889L123.344 19.125H129.429L128.654 23.625H122.57L119.86 39.375H127.05L126.055 45H113.332V45Z"
                fill="white"
              />
              <rect x="131" y="39" width="6" height="6" fill="white" />
            </svg>
          </Link>
        </li>
        <li className={styles.liMargin}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.liMargin}>
          <Link href="/shop">Shop</Link>
        </li>
      </div>
      <div className={styles.rightLinks}>
        {/* {isLoading ? (
          "..."
        ) : user ? (
          <li className={styles.liSmallMargin}>
            <AccountCircleOutlined fontSize="large" onClick={handleClick} />
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              style={{
                width: "150px",
                marginTop: "30px",
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <MenuItem
                style={{
                  borderBottom: "1px solid grey",
                  justifyContent: "center",
                }}
              >
                Signed in as <br></br>
                {user.given_name}
              </MenuItem>
              <MenuItem>
                <Button variant="contained" color="secondary">
                  <Link color="white" href="/api/auth/logout">
                    Logout
                  </Link>
                </Button>
              </MenuItem>
            </Menu>
          </li>
        ) : (
          <li className={styles.liMargin}>
            <Link href="/api/auth/login">Login</Link>
          </li>
        )} */}
        <li className={styles.liSmallMargin}>
          <ClickAwayListener onClickAway={() => setCartOpen(false)}>
            <Badge
              badgeContent={cart.length}
              style={{ color: "white" }}
              color="primary"
            >
              <ShoppingBag
                onClick={() => setCartOpen(!cartOpen)}
                fontSize="large"
              />
              {cartOpen ? <Cart /> : null}
            </Badge>
          </ClickAwayListener>
        </li>
      </div>
    </div>
  );
};

export default Nav;
