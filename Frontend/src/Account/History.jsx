import React, { useEffect, useState } from "react";
import instance from "../API/axios";
import HistoryList from "./HistoryList";

function History() {
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    async function getPayment() {
      const response = await instance
        .get("order/payment/")
        .then((r) => setPayment(r.data));
    }
    getPayment();
  },[]);

  return (
    <div className="in">
      <h2>ประวัติการสั่งซื้อ</h2>
      {payment.length > 0 ? (
        payment.map((item) => <HistoryList key={item.id} {...item}/>)
      ) : (
        <div className="p-3">
          <h5 className="bg-warning p-3 w-25">คุณยังไม่เคยสั่งสินค้า</h5>
        </div>
      )}
    </div> 
  );
}

export default History;
