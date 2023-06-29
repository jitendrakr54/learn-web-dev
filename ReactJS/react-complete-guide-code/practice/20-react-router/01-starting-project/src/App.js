import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

// function App() {
//   return (
//     <div>
//       <Route path="/welcome">
//         <Welcome />
//       </Route>
//       <Route path="/products">
//         <Products />
//       </Route>
//       <h1>Let's get started</h1>
//     </div>
//   );
// }

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component

// function App() {
//   return (
//     <div>
//       <MainHeader />
//       <main>
//         <Route path="/welcome">
//           <Welcome />
//         </Route>
//         <Route path="/products">
//           <Products />
//         </Route>
//         <Route path="/products/:productId">
//           <ProductDetail />
//         </Route>
//       </main>
//     </div>
//   );
// }

// // ********** Using "Switch" and "exact" for configuring routes
// function App() {
//   return (
//     <div>
//       <MainHeader />
//       <main>
//         <Switch>
//           <Route path="/welcome">
//             <Welcome />
//           </Route>
//           <Route path="/products" exact>
//             <Products />
//           </Route>
//           <Route path="/products/:productId">
//             <ProductDetail />
//           </Route>
//         </Switch>
//       </main>
//     </div>
//   );
// }

// ********** Redirecting the User
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
export default App;
