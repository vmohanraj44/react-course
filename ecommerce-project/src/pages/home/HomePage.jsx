import { useEffect, useState } from 'react';
import { Header } from "../../components/Header";
import { ProductsGrid } from './ProductsGrid';
import axios from 'axios';
import "./HomePage.css";

export function HomePage({cart}) {
  const [products, setProducts] = useState([]);


useEffect(() => {
  axios.get('/api/products')
  .then((response) => {
    setProducts(response.data);
  });
}, [])
  //setProducts(productsData);
 /* fetch('http://localhost:3000/api/products')
    .then((response) => response.json())
    .then((response) => {
      setProducts(response.data);
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });*/

  return (
    <>
      <Header cart = {cart} />

      <div className="home-page">
          <ProductsGrid products ={ products }/>
      </div>
    </>
  );
}
