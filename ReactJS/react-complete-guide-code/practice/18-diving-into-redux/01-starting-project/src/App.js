import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import UserProfile from "./components/UserProfile";

/* 
import Counter from "./components/Counter";
function App() {
  return <Counter />;
}
*/

//*************************************************** Working with multiple slices
/* 
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
      <Counter />
    </Fragment>
  );
}
*/

// ******************* Reading & Dispatching from a new slice

import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
