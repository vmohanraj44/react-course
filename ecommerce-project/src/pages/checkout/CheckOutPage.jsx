import axios from "axios";
import { useEffect, useState } from "react";
import "./CheckOutHeader.css";
import "./CheckOutPage.css";
import { CheckOutHeader } from "./CheckOutHeader";
import { OrderSummary } from "./OrderSummary.jsx";
import { PaymentSummary } from "./PaymentSummary.jsx";

export function CheckOutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        setDeliveryOptions(response.data);
      });

    axios.get("/api/payment-summary").then((response) => {
      setPaymentSummary(response.data);
    });
  }, []);

  return (
    <>
      <title>Checkout</title>
      <CheckOutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
         <OrderSummary deliveryOptions = { deliveryOptions } cart = {cart } />

          {paymentSummary && (
           <PaymentSummary paymentSummary = {paymentSummary} />
          )}
        </div>
      </div>
    </>
  );
}
