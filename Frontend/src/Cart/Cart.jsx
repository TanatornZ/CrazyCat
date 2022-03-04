import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartList from "./CartList";
import { AuthContext } from "../API/Auth";
import instance from "../API/axios";
import CartBar from "./CartBar";

function Cart() {
  const context = useContext(AuthContext);
  const user = context.inforUser;
  const [order, setOrder] = useState(null);
  

  useEffect(() => {
    async function callOrder() {
      const response = await instance
        .get(`order/basket/?customer=${user.id}`)
        .then((r) => r.data)
        .catch((err) => err.response);
      if (!response.length) {
        console.log('pass')
      } else {
        setOrder(response)
      }
    }
    callOrder();
    
  }, []);

  const calculate = (amount, price) => {
    return amount * price;
  };

  

  return (
    <div class="">
      {order ? (
        <div className="d-flex">
          <CartList key='cartList'/>
          <div className="cart-bar">
            <CartBar key='cartBar'/>
          </div>
        </div>
      ) : (
        <div>
          <h2 className='text-center mt-3'>ยังไม่มีสินค้าในตะกร้า</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
