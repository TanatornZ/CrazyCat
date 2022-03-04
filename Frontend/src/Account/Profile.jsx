import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import instance from "../API/axios";
import  Address  from "./Address";

function Profile() {
  let navigate = useNavigate();

  const [user, setUser] = useState([]);
  // const [first, setFirst] = useState();
  // const [last, setLast] = useState();
  // const [userName, setUserName] = useState();
  // const [email, setEmail] = useState();

  async function logout() {
    await localStorage.clear() ;
    navigate('/') ;
  }

  useEffect(() => {
    async function getUser() {
      const response = await instance
        .get("auth/profile/")
        .then((r) => r.data)
        .catch((err) => err.message);
      setUser(response);
      // setFirst(response.first_name);
      // setLast(response.last_name);
      // setUserName(response.username);
      // setEmail(response.email);
    }
    getUser();
  }, []);


  return (
    <div className="">
      <div className="in ">
        <h3>ข้อมูลส่วนตัว</h3>
        <div className="w-50 p-3" >
          <div className="name d-flex ">
            <h5>ชื่อ: </h5>
            <h5>{user.first_name}</h5>
            <h5 className="ms-3">{user.last_name}</h5>
          </div>
          <h5 className='mt-2'>username:  {user.username}</h5>
          <h5 className='mt-3'>email: {user.email}</h5>
          <h5 className='mt-3'>เบอร์โทร: {user.tel}</h5>
        </div>
        <div class="d-flex justify-content-between w-100">
          <Button
            variant="warning"
            className="mt-3 w-25"
            as={Link}
            to="edit/profile"
          >
            แก้ไข
          </Button>
          <Button variant="warning" className="mt-3 w-25" onClick={logout}>
            logout
          </Button>
        </div>
      </div>
      <Address key="address" {...user}/>
    </div>
  );
}

export default Profile;
