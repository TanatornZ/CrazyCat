import React, { useContext, useEffect, useState } from "react";

import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Image,
  Badge,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../API/Auth";
import instance from "../API/axios";

export const NavBar = () => {
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;
  const user_id = context.inforUser.id;
  const [basket, setBasket] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    async function callBasket() {
      const response = await instance
        .get(`order/basket/?customer__id=${user_id}`)
        .then((r) => r.data)
        .catch((e) => e.message);
      setBasket(response)
    }
    callBasket()
  },[]);

  
  const cart =
    "https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png";
  const heart =
    "https://img.icons8.com/material-outlined/24/000000/like--v1.png";
  const user =
    "https://img.icons8.com/material-outlined/24/000000/user--v1.png";
  const cat = "https://img.icons8.com/pastel-glyph/64/000000/cat--v2.png";

  const clicklogin = () => {
    navigate("/login");
  };

  return (
    <Navbar className="Nav" variant="white" sticky="top" expand="md">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ fontWeight: 700, display: "flex" }}
        >
          <h2 className="text-dark">Crazy cat</h2>{" "}
          <Image className="icon" src={cat} width={30} />
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/product" style={{ color: "black" }}>
            ร้านค้า
          </Nav.Link>
          <Nav.Link as={Link} to="/doc" style={{ color: "black" }}>
            บทความ
          </Nav.Link>
          <Nav.Link as={Link} to="/question" style={{ color: "black" }}>
            คำถาม
          </Nav.Link>
        </Nav>
        {currentUser ? (
          <Nav>
            <Nav.Link as={Link} to="/cart">
              <Image className="icon" src={cart} />
              {/* <Badge pill bg="primary">
                2
              </Badge> */}
            </Nav.Link>
            <Nav.Link as={Link} to="/account/favorite">
              <Image className="icon" src={heart} />
            </Nav.Link>
            <Nav.Link as={Link} to="/account">
              <Image className="icon" src={user} />
            </Nav.Link>
          </Nav>
        ) : (
          <Button onClick={clicklogin} variant='warning'>เข้าสู่ระบบ</Button>
        )}
      </Container>
    </Navbar>
  );
};
