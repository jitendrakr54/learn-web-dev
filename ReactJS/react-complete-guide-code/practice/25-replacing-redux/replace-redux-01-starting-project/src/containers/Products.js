// Using Redux
/* 
import React from 'react';
import { useSelector } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = props => {
  const productList = useSelector(state => state.shop.products);
  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
 */

// ********************************************** Alternative: using the Context API
/* 
import React, { useContext } from "react";

import ProductItem from "../components/Products/ProductItem";
import ProductContext from "../context/product-context";
import "./Products.css";

const Products = (props) => {
  const productList = useContext(ProductContext).products;

  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
 */

// ************************************************ using the Custom Store

import React from "react";

import ProductItem from "../components/Products/ProductItem";
import { useStore } from "../hooks-store/store";
import "./Products.css";

const Products = (props) => {
  const state = useStore()[0];

  return (
    <ul className="products-list">
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
