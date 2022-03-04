import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../API/Auth";
import instance from "../API/axios";
import CartBarList from "../Cart/CartBarList";

function PaymentBar() {

  const context = useContext(AuthContext);
  const user = context.inforUser;

  const [order, setOrder] = useState([]);
  const [total , setTotal] = useState(0);

  useEffect(() => {
    async function callOrder() {
      const response = await instance
        .get(`order/basket/?customer=${user.id}`)
        .then((r) => r.data)
        .catch((err) => err.response);
      setOrder(response);
    }
    callOrder();
  }, []);

  const calculate = (amount, price) => {
    return amount * price;
  };

  const sendTotalToParent = (value) => {
    setTotal(total+value)
  }

  return (
    <>
      {order && order.map((item) => <CartBarList key={item.id} {...item} />)}
      
    </>
  );
}

export default PaymentBar;
