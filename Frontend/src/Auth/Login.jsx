import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import instance from "../API/axios";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [tokens, setTokens] = useState(null);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const form = { login, password };
    async function Login() {
      const response = await instance
        .post("auth/login/", form)
        .then((r) => setTokens(r.data.token))
        .catch((err) => setError('กรุณากรอก username หรือ password ให้ถูกต้อง'));
    }
    Login();
  }

  useEffect(() => {
    if (tokens) {
      localStorage.setItem("token", tokens);
      navigate("/");
    } else {
      setError(true);
    }
  }, [tokens]);

  return (
    <div className="mx-auto w-50 border rounded p-5 ">
      <h2 className="text-center">เข้าสู่ระบบ</h2>
      <Form className="mt-4" onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            placeholder="email"
            onChange={(e) => setLogin(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>รหัสผ่าน</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {error && (
          <p className="text-danger ms-3">{error}</p>
        )}
        <p className="text-end">ลืมรหัสผ่าน</p>
        <div className="justify-content-center d-flex">
          <button className="bg-warning border-0 rounded p-3 text-dark" type="submit">
            เข้าสู่ระบบ
          </button>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <p>ยังไม่ได้เป็นสมาชิก? </p>
          <Link to="/register">สมัครสมาชิก</Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
