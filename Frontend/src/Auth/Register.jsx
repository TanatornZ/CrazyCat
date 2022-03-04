import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import instance from "../API/axios";

function Register() {
  let navigator = useNavigate();

  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [passWord2, setPassWord2] = useState("");
  const [tel, setTel] = useState("");
  const [error, setError] = useState([]);

  async function handleRegister(e) {
    e.preventDefault();
    const form = {
      username: userName,
      first_name: firstName,
      last_name: lastName,
      email,
      tel : tel ,
      password: passWord,
      password_confirm: passWord2,
    };
    async function register() {
      let response = await instance
        .post("auth/register/", form)
        .then((r) => r.data)
        .catch((err) => err.response.data);
      if (response.id) {
        alert(`สมัครสมาชิกสำเร็จแล้ว กรุณาเข้าสู่ระบบ`);
        navigator("/login");
      } else {
        alert(JSON.stringify(response));
      }
    }
    register();
  }

  return (
    <div className="mx-auto w-50 border rounded p-5 ">
      <h2 className="text-center">สมัครสมาชิก</h2>

      <Form className="mt-4" onSubmit={handleRegister}>
        <div className="d-flex justify-content-center mb-3">
          <Form.Group className="w-50">
            <Form.Label>ชื่อ</Form.Label>
            <Form.Control
              type="text"
              placeholder="ชื่อ"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="w-50 ms-2">
            <Form.Label>นามสกุล</Form.Label>
            <Form.Control
              type="text"
              placeholder="นามสกุล"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>อีเมล</Form.Label>
          <Form.Control
            type="email"
            placeholder="อีเมล"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>ชื่อผู้ใช้</Form.Label>
          <Form.Control
            type="text"
            placeholder="ชื่อผู้ใช้"
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>เบอร์โทรติดต่อ</Form.Label>
          <Form.Control
            type="number"
            placeholder="เบอร์โทร"
            onChange={(e) => setTel(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-center mb-3">
          <Form.Group className="w-50">
            <Form.Label>รหัสผ่าน</Form.Label>
            <Form.Control
              type="password"
              placeholder="รหัสผ่าน"
              onChange={(e) => setPassWord(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="w-50 ms-2">
            <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
            <Form.Control
              type="password"
              placeholder="ยืนยันรหัสผ่าน"
              onChange={(e) => setPassWord2(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className="justify-content-center d-flex">
          <button className="bg-warning border-0  rounded p-3 text-dark" type="submit">
            สมัครสมาชิก
          </button>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <p>เป็นสมาชิกอยู่แล้ว? </p>
          <Link to="/login">เข้าสู่ระบบ</Link>
        </div>
      </Form>
    </div>
  );
}

export default Register;
