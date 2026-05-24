import { formatMoney } from "../../utils.money.js";
import axios from "axios";
import dayjs from "dayjs";

export function DeliveryOptions({deliveryOptions, cartItem, loadCart}){
    return( 
        <div className="delivery-options">
                        <div className="delivery-options-title">
                          Choose a delivery option:
                        </div>
                        {deliveryOptions.map((deliveroption) => {
                          let priceString = "FREE Shipping";

                          if (deliveroption.priceCents > 0) {
                            priceString = `${formatMoney(deliveroption.priceCents)} - Shipping`;
                          }

                          const updateDeliveryOptions = async ()=>{
                          await axios.put(`/api/cart-items/${cartItem.productId}`, {
                            deliverOptionId:deliveroption.id
                          })

                          await loadCart();
                          }
                          return (
                            <div
                              key={deliveroption.id}
                              className="delivery-option"
                              onClick = {updateDeliveryOptions}
                            >
                              <input
                                type="radio"
                                onChange={()=>{}}
                                checked={
                                  deliveroption.id === cartItem.deliveryOptionId
                                }
                                className="delivery-option-input"
                                name={`delivery-option-${cartItem.productId}`}
                              />
                              <div>
                                <div className="delivery-option-date">
                                  {dayjs(
                                    deliveroption.estimatedDeliveryTimeMs,
                                  ).format("dddd, MMMM D")}
                                </div>
                                <div className="delivery-option-price">
                                  {priceString}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
    );
}