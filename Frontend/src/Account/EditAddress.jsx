import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../API/Auth";
import instance from "../API/axios";

function EditAddress() {
  const navigate = useNavigate();

  const context = useContext(AuthContext);
  const user = context.inforUser.id;

  const [house_number, setHouseNumber] = useState("");
  const [sub_district, setSubDistrict] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");

  async function putAddress(e) {
    e.preventDefault();
    const form = {
      house_number,
      sub_district,
      district,
      province,
      postal,
      customer: user,
      detail: "-",
    };
    async function post() {
      const response = await instance
        .post("account/address/", form)
        .then((r) => r.data)
        .catch((err) => err.message);
    }
    post();
    navigate("/account");
  }
  return (
    <div className="in">
      <div className="title">
        <h2>ที่อยู่การจัดส่ง</h2>
        <div className="p-3">
          <Form className="w-75" onSubmit={putAddress}>
            <div class="w-50">
              <Form.Group>
                <Form.Label>ที่อยู่</Form.Label>
                <Form.Control
                  type="text"
                  value={house_number}
                  required
                  onChange={(e) => setHouseNumber(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>จังหวัด</Form.Label>
                <Form.Control
                  type="text"
                  value={province}
                  required
                  onChange={(e) => setProvince(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>อำเภอ</Form.Label>
                <Form.Control
                  type="text"
                  value={district}
                  required
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>ตำบล</Form.Label>
                <Form.Control
                  type="text"
                  value={sub_district}
                  required
                  onChange={(e) => setSubDistrict(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>รหัสไปรษณีย์</Form.Label>
                <Form.Control
                  type="number"
                  value={postal}
                  required
                  onChange={(e) => setPostal(e.target.value)}
                />
              </Form.Group>
            </div>
            <Button variant="warning" type="submit" className="mt-4">
              บันทึก
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default EditAddress;
