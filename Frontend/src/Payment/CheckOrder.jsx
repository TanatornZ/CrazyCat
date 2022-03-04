import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../API/Auth";
import instance from "../API/axios";
import PaymentBar from "./PaymentBar";

function CheckOrder() {
  let navigate = useNavigate();

  const [payment, setPayment] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");
  const [price, setPrice] = useState(0);
  const [cal, setCal] = useState(false);

  const context = useContext(AuthContext);
  const user = context.inforUser;
  const [house, setHouse] = useState([]);
  let payId = [];
  let total = 0;

  useEffect(() => {
    async function getAddress() {
      const response = await instance
        .get(`account/address/?customer=${user.id}/`)
        .then((r) => r.data)
        .catch((err) => err.message);
      setHouse(response);
    }
    async function callOrder() {
      const response = await instance
        .get(`order/basket/?customer=${user.id}`)
        .then((r) => r.data)
        .catch((err) => err.response);
      setOrder(response);
    }

    callOrder();
    getAddress();
  }, []);

  async function getTotalPrice(amount, product) {
    const response = await instance
      .get(`store/product/${product}/`)
      .then((r) => r.data)
      .catch((err) => err.response);
    total += amount * response.price;
  }

  async function click() {
    for (let i in order) {
      payId.push([order[i].Number_of_products_needed, order[i].product]);
    }

    for (let f in payId) {
      await getTotalPrice(payId[f][0], payId[f][1]);
    }
    setPrice(total);
    setCal(true);
  }

  async function orderProduct() {
    const product_id = order.map((item) => item.id);
    const product_no = order.map((item) => item.Number_of_products_needed);
    const No = product_no.reduce((sum, item) => sum + item, 0);

    const form = {
      basket: product_id,
      payment_amount: price,
      No_products_in_the_order: No,
      customer: user.id,
      status: 'รอการตวรจสอบ' ,
      deliveryAddress: address,
    };
    console.log(product_id)
    const response = await instance
      .post("order/paymentedit/", form)
      .then((response) => {
        const form2 = {
          name: product_id[0],
          price: price,
          amount: No,
          payment: response.data.id,
        };
        instance.post(`order/productpayment/`, form2).then((r) => {
          alert("สั่งเรียบร้อย กรุณาโอนเงิน");
          navigate(`${response.data.id}`);
        });
      })
      .catch((e) => alert("กรุณาเลือกข้อมูลให้ครบถ้วน"));

  }

  return (
    <div>
      <div className="d-flex">
        <div className="payment-select me-5">
          <div className="bg-warning">
            <div className="p-4">
              <h3 className="p-2">เลือกที่อยู่</h3>
              {house &&
                house.map((item) => (
                  <div className="mt-3 bg-white d-flex justify-content-between p-3 align-items-center rounded address-list">
                    <div>
                      <p>
                        {user.first_name} {user.last_name}
                      </p>
                      <p>
                        {item.house_number} ต.{item.sub_district} อ.
                        {item.district} จ.
                        {item.province} {item.postal}
                      </p>
                      <p>เบอร์ติดต่อ {user.tel}</p>
                    </div>
                    <div>
                      <input
                        className="form-check-input fs-3"
                        type="radio"
                        name="address"
                        value={item.id}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="w-100 bg-warning p-4 mt-4">
            <h3 className="p-2">เลือกการชำระเงิน</h3>
            <div class="w-100 bg-light p-3 rounded d-flex justify-content-between">
              <label class="form-check-label" for="flexRadioDefault2">
                <h4>การชำระเงินปลายทาง</h4>
              </label>
              <input
                className="form-check-input fs-3"
                type="radio"
                name="transition"
                value="after"
                onChange={(e) => setPayment(e.target.value)}
              />
            </div>
            <div className="w-100 bg-light p-3 rounded mt-3 ">
              <div className="d-flex justify-content-between">
                <label class="form-check-label" for="flexRadioDefault2">
                  <h4>โอนชำระผ่านธนาคาร</h4>
                </label>
                <input
                  className="form-check-input fs-3"
                  type="radio"
                  name="transition"
                  value="before"
                  onChange={(e) => setPayment(e.target.value)}
                />
              </div>
              <hr></hr>
              <div className="d-flex justify-content-center">
                <img src="https://www.webapponsite.com/assets/img/web.png" />
              </div>
            </div>
          </div>
        </div>
        <div className=" cart-bar">
          <PaymentBar />
          <div className="px-4">
            {cal ? (
              <div>
                <div className="d-flex justify-content-between">
                  {" "}
                  <h5>ยอดรวม</h5>
                  <h5>{price} ฿</h5>
                </div>
                <div
                  className="d-flex justify-content-center mb-4"
                  onClick={orderProduct}
                >
                  <div className="btn btn-light border rounded">ชำระเงิน</div>
                </div>
              </div>
            ) : (
              <div
                className="d-flex justify-content-center mb-4"
                onClick={click}
              >
                <div className="btn btn-light border rounded">คำนวณเงิน</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOrder;
