import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import instance from "../API/axios";

function EditProfile() {
  let navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    async function getUser() {
      const response = await instance
        .get("auth/profile/")
        .then((r) => r.data)
        .catch((err) => err.message);

      setFirstName(response.first_name);
      setLastName(response.last_name);
      setUserName(response.username);
      setEmail(response.email);
      setTel(response.tel);
    }
    getUser();
  }, []);

  async function fixUser(e) {
    e.preventDefault();

    const form = new FormData() ;
    form.append('username', userName)
    form.append('first_name', firstName)
    form.append('last_name', lastName)
    form.append('email', email)
    form.append('tel', tel)
    form.append('profile_image', image)
    // const form = {
    //   username: userName,
    //   first_name: firstName,
    //   last_name: lastName,
    //   email: email,
    //   tel: tel,
    //   profile_image:image
    // };
    async function putUser() {
      const response = await instance
        .put("auth/profile/", form)
        .then((r) => r.data)
        .catch((err) => err.message);
    }
    putUser();
    navigate("/account");
  }

  return (
    <div className="in">
      <h3>ข้อมูลส่วนตัว</h3>
      <div className="p-3">
        <Form className="w-75" onSubmit={fixUser}>
          <div className="d-flex justify-content-between w-75 ">
            <Form.Group>
              <Form.Label>ชื่อ</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>นามสกุล</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
          </div>
          <Form.Group className="mt-3">
            <Form.Label>username</Form.Label>
            <Form.Control type="text" disabled value={userName} />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>email</Form.Label>
            <Form.Control type="email" value={email} disabled />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>เบอร์โทร</Form.Label>
            <Form.Control
              type="number"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>รูปภาพ</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Form.Group>
          {image && (
            <div className="mt-3 d-flex justify-content-center">
              <img src={URL.createObjectURL(image)} className='profile-upload'></img>
            </div>
          )}
          <div class="justify-content-end d-flex">
            <Button variant="warning" type="submit" className="mt-4 ">
              บันทึก
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default EditProfile;
