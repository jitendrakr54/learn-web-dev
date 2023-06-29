// const MainHeader = () => {
//   return (
//     <header>
//       <ul>
//         <li>
//           <a href="/welcome">Welcome</a>
//         </li>
//         <li>
//           <a href="/products">Products</a>
//         </li>
//       </ul>
//     </header>
//   );
// };

// ************ Working with Links
// import { Link } from "react-router-dom";

// // Below code doesn't refresh on navigating to a new link
// const MainHeader = () => {
//   return (
//     <header>
//       <ul>
//         <li>
//           <Link to="/welcome">Welcome</Link>
//         </li>
//         <li>
//           <Link to="/products">Products</Link>
//         </li>
//       </ul>
//     </header>
//   );
// };

// ************ Using NavLinks
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

// Below code doesn't refresh on navigating to a new link
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/welcome">
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default MainHeader;
