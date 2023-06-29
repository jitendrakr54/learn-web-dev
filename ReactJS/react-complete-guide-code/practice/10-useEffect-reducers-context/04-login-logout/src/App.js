import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthContext from "./store/auth-context";
import MainHeader from "./components/MainHeader/MainHeader";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // const userLoggedIn = localStorage.getItem("isLoggedIn");
//   // if (userLoggedIn == "1") {
//   //   setIsLoggedIn(true); // This will result into infine loop because calling this will re-execute this component and
//   //   // will read from local storage and set this state which will againg re-exeute and so on
//   // }

//   useEffect(() => {
//     const userLoggedIn = localStorage.getItem("isLoggedIn");
//     if (userLoggedIn === "1") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const loginHandler = (email, password) => {
//     // We should of course check email and password
//     // But it's just a dummy/ demo anyways
//     localStorage.setItem("isLoggedIn", "1");
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn", "1");
//   };

//   return (
//     <React.Fragment>
//       <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
//       <main>
//         {!isLoggedIn && <Login onLogin={loginHandler} />}
//         {isLoggedIn && <Home onLogout={logoutHandler} />}
//       </main>
//     </React.Fragment>
//   );
// }

// // Using Context
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const userLoggedIn = localStorage.getItem("isLoggedIn");
//     if (userLoggedIn === "1") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const loginHandler = (email, password) => {
//     localStorage.setItem("isLoggedIn", "1");
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn", "1");
//   };

//   // return (
//   //   <React.Fragment>
//   //     <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
//   //     <main>
//   //       {!isLoggedIn && <Login onLogin={loginHandler} />}
//   //       {isLoggedIn && <Home onLogout={logoutHandler} />}
//   //     </main>
//   //   </React.Fragment>
//   // );

//   return (
//     <AuthContext.Provider
//       value={{
//         isLoggedIn: isLoggedIn,
//         onLogout: logoutHandler,
//       }}
//     >
//       <MainHeader />
//       <main>
//         {!isLoggedIn && <Login onLogin={loginHandler} />}
//         {isLoggedIn && <Home onLogout={logoutHandler} />}
//       </main>
//     </AuthContext.Provider>
//   );
// }

// Using Context
function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
