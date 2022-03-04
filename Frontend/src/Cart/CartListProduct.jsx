import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import instance from "../API/axios";

function CartListProduct(props) {
  const [list, setList] = useState({});
  const [detail, setDetail] = useState([]);
  const [img, setImage] = useState([]);

  const { product, customer, Number_of_products_needed, id } = props;

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
  }, []);

  const calculate = (amount, price) => {
    return amount * price;
  };

  async function DeleteCartProduct() {
    const response = await instance.delete(`order/basket/${id}/`);
    alert("ลบสินค้าเรียบร้อย");
  }

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <img className="cart-list-img col-2" src={img} />

      <div className="cart-list-text col-5">
        <h3>{truncate(list.name, 20)}</h3>
        <p>{truncate(detail,100)}</p>
      </div>
      <h5 className="col-2">{Number_of_products_needed} ชิ้น</h5>
      <h5 className="text-center col-2">
        {calculate(list.price, Number_of_products_needed)} ฿
      </h5>
      <div className="col-1">
        <i
          class="fas fa-times-circle text-danger fs-3"
          onClick={DeleteCartProduct}
        ></i>
      </div>
      <hr className="mt-4"></hr>
    </>
  );
}

export default CartListProduct;
