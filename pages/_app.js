import Nav from "../components/Nav";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import rootReducer from "../reducers/index";
import Footer from "../components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0070f3",
    },
    secondary: {
      main: "rgb(220, 0, 78)",
    },
  },
});

let composeEnhancers = compose;
if (typeof window !== "undefined") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const store = createStore(rootReducer, composeEnhancers());

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Nav />
          <div style={{ height: "100px" }} />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </Provider>
    </UserProvider>
  );
}
export default MyApp;
