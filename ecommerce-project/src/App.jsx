import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { HomePage } from "./pages/HomePage";
import { CheckOutPage } from "./pages/checkout/CheckOutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response);
    });
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart = {cart} />} />
      <Route path="checkout" element={<CheckOutPage cart = {cart} />} />
      <Route path="orders" element={<OrdersPage cart = {cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
