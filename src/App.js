import { useEffect, useState, useContext } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Login from "./components/Auth/Login";
import firebase from "firebase/app";
import { Redirect, Route, Switch } from "react-router";
import userContext from "./store/user-context";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [loginIsShown, setLoginIsShown] = useState(false);
  const userCtx = useContext(userContext);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAuqDv8VgXAc-fkm-Lw0gP7RNnE53GpfJM",
      authDomain: "order-it-6fb76.firebaseapp.com",
      databaseURL:
        "https://order-it-6fb76-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "order-it-6fb76",
      storageBucket: "order-it-6fb76.appspot.com",
      messagingSenderId: "216157103677",
      appId: "1:216157103677:web:65d7f3643b0a94629fac54",
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
  }, []);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showLoginHandler = () => {
    setLoginIsShown(true);
  };

  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };

  // the orders path should be previous orders

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      {loginIsShown && <Login onClose={hideLoginHandler}></Login>}
      <Header
        onShowCart={showCartHandler}
        onShowLogin={showLoginHandler}
      ></Header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Meals></Meals>
          </Route>
          {userCtx.isLoggedIn && (
            <Route path="/orders" exact>
              <div></div>
            </Route>
          )}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </CartProvider>
  );
}

export default App;
