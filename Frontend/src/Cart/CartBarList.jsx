import React, { useEffect, useState } from "react";
import instance from "../API/axios";

function CartBarList(props) {
  const [list, setList] = useState({});
  const [detail, setDetail] = useState([]);
  const [img, setImage] = useState([]);
  const [price, setPrice] = useState(0);

  const { product, customer, Number_of_products_needed } = props;

  const calculate = (amount, price) => {
    return amount * price;
  };

  useEffect(() => {
    async function callList() {
      const response = await instance
        .get(`store/product/${product}/`)
        .then((r) => r.data)
        .catch((err) => err.message);
      setList(response);
      setDetail(response.productdetail.properTy);
      setImage(response.productimages[0].image);
    }
    callList();
    setPrice(calculate(list.price, Number_of_products_needed));
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div>
      <div className="px-4 mt-3 row">
        <div className="cart-list-text col-6 mt-2">
          <h5>{truncate(list.name, 20)}</h5>
        <p>{truncate(detail,40)}</p>
        </div>
        <h5 className="col-3 mt-2">{Number_of_products_needed} ชิ้น</h5>
        <h5 className="text-center col-3 mt-2">
          {calculate(list.price, Number_of_products_needed)} ฿
        </h5>
        <hr></hr>
      </div>
    </div>
  );
}

export default CartBarList;
