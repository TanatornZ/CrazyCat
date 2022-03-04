import React, { useEffect, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../API/axios";
import { AuthContext } from "../API/Auth";

function Tranfer() {
  const navigate = useNavigate()
  let params = useParams();
  const [image, setImage] = useState(null);
  const [payment, setPayment] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);

  const getImage = (e) => {
    setImage(e.target.files[0]);
    const url = URL.createObjectURL(image);
    console.log(url);

  };

  const context = useContext(AuthContext);
  const user = context.inforUser;

  useEffect(() => {
    async function callPayment() {
      const response = await instance
        .get(`order/paymentedit/${params.paymentId}/`)
        .then((response) => response.data)
        .catch((error) => error.message);

      setPayment(response);
    }
    callPayment();
  }, []);



  async function uploadSlip() {
    const form = new FormData();
    form.append("slip", image);
    form.append("payment", params.paymentId);
   

    const response = await instance
      .post("order/silpimage/", form)
      .then((r) => {alert('เรียบร้อยเดี๋ยวระบบจะตรวจสอบและทำการบันทึกให้นะคะ'); navigate('/')})
      .catch((err) => {
        err.message;
      });
  }

  console.log(image);

  return (
    <div>
      <div className="d-flex flex-column text-center ">
        <h2>สแกน QR Code เพื่อชำระเงิน</h2>
        <h3>จำนวน {payment?.payment_amount} บาท</h3>
        <img
          className="mx-auto"
          width="200"
          height="200"
          src="https://www.webapponsite.com/assets/img/web.png"
        />
        <h4>นาย ธนาธร อินทพงษ์</h4>
        <h4>312-2323-2323</h4>
        <h4>ธนาคารกรุงไทย</h4>

        <h3>อัพโหลดสลิปโอนเงิน</h3>

        <div class="d-flex justify-content-center mt-3">
          <input type="file" onChange={getImage} style={{ width: "200px" }} />
        </div>

        {image && (
          <img
            className="mt-4 border mx-auto slip-img"
            src={URL.createObjectURL(image)}
            width="250"
            height="250"
          ></img>
        )}
      </div>
      <div className="d-flex justify-content-end p-3">
        <Button className="mt-4" onClick={uploadSlip}>
          ส่งสลิป
        </Button>
      </div>
    </div>
  );
}

export default Tranfer;
