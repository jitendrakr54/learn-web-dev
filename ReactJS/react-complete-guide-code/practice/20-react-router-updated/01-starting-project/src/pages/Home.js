/* 
const HomePage = () => {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <a href="/products">the list of products</a>
      </p>
    </>
  );
};
*/

// ***************************************************** Navigating between Pages with Links
/* 
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
    </>
  );
};
*/

// ***************************************************** Navigating Programmatically
// In reality, it won't be a button

import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateHanler = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {/* Go to <Link to="/products">the list of products</Link> */}
        Go to <Link to="products">the list of products</Link>
      </p>
      <button onClick={navigateHanler}>Navigate</button>
    </>
  );
};

export default HomePage;
