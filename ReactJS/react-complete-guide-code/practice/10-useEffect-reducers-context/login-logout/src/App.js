import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

// Problem without useEffect
/* 
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Below 3 lines of code will result into infinite loop because if user is logged in we are updating state which cause
  // this component to re-render and again checks for user loggedIn and update the state which result into re-render and
  // so on... so, we have to use useEffect()

  // const loggedInInfo = localStorage.getItem("isLoggedIn");
  // if (loggedInInfo === "1") {
  //   setIsLoggedIn(true);
  // }

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}
*/

// ********************************************** Using the useEffect()
/* 
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //wih no dependencies will ensure that function gets executed only once when app is loaded
  useEffect(() => {
    const loggedInInfo = localStorage.getItem("isLoggedIn");
    if (loggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}
*/

// ***************************************** Using the React Context API
/* 
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //wih no dependencies will ensure that function gets executed only once when app is loaded
  useEffect(() => {
    const loggedInInfo = localStorage.getItem("isLoggedIn");
    if (loggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
      }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}
*/

// ******************************************* Building & Using a Custom Context Provider Component
import TestContext from "./TestContext";
function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <TestContext />
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
