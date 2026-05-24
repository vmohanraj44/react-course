import { useEffect, useState } from 'react';
import { Header } from "../../components/Header";
import { ProductsGrid } from './ProductsGrid';
import axios from 'axios';
import "./HomePage.css";

export function HomePage({cart, loadCart}) {
  const [products, setProducts] = useState([]);

useEffect(() => {
  const getHomeData = async () =>{
   const response = await axios.get('/api/products');
   setProducts(response.data);
  };

  getHomeData(); 

}, []);

/*
useEffect(() => {
  axios.get('/api/products')
  .then((response) => {
    setProducts(response.data);
  });
}, [])*/


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
          <ProductsGrid products ={ products } loadCart={loadCart}/>
      </div>
    </>
  );
}
