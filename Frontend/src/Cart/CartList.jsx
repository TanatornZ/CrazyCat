import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../API/Auth";
import instance from "../API/axios";
import CartListProduct from "./CartListProduct";

function CartList() {
  const context = useContext(AuthContext);
  const user = context.inforUser;

  const [order, setOrder] = useState([]);

  useEffect(() => {
    async function callOrder() {
      const response = await instance
        .get(`order/basket/?customer=${user.id}/`)
        .then((r) => r.data)
        .catch((err) => err.response);
      setOrder(response);
    }
    callOrder();
    
  }, []);

  

  const calculate = (amount, price) => {
    return amount * price;
  };

  return (
    <div>
      <div className="cart-list me-5 p-4 row">
        {order && order.map((item) => (<CartListProduct key={item.id} {...item} />))}
        
      </div>
    </div>
  );
}

export default CartList;
