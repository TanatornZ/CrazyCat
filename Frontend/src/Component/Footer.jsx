import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";
export const Footer = () => {
  const fb =
    "https://img.icons8.com/material-rounded/48/000000/facebook-new.png";
  const tw = "https://img.icons8.com/android/48/000000/twitter.png";
  const ig =
    "https://img.icons8.com/material-outlined/48/000000/instagram-new--v1.png";

  const OpenContact = (web) => {
    const newWindow = window.open(web, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <footer className="footer">
      <Container className="text-dark">
        <Row>
          <Col>
            <div>
              <h4>Crazy Cat</h4>
            <p>เกี่ยวกับ</p>
            <p>บริการลูกค้า</p>
            <p>ติดตามพวกเรา</p>
            </div>
          </Col>
          <Col>
            <div>
              <h4>เกี่ยวกับ</h4>
              <p>ทำไมต้อง crazycat</p>
            </div>
          </Col>
          <Col>
            <div>
              <h4>บริการลูกค้า</h4>
              <p>ติตต่อเรา</p>
              <p>ไลฟ์แชท</p>
              <p>ติดตามสถานะซื้อขาย</p>
              <p>การคืนสินค้า</p>
              <p>คำถามที่พบบ่อย</p>
            </div>
          </Col>
          <Col>
            <div>
              <h4>ติดตามพวกเรา</h4>
              <ul className="d-flex justify-content-around   icon-footer mt-3 ">
                <li>
                  <Image src={ig} onClick={() => window.open( 'https://www.instagram.com/jarus.bankieyz/')}/>
                </li>
                <li>
                  <Image src={fb} onClick={() => window.open( 'https://www.facebook.com/Adsadawut.Hadtang')} />
                </li>
                <li>
                  <Image src={tw} onClick={() => window.open( 'https://twitter.com/')}/>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <p>CarzyCat 2022</p>
      </Container>
    </footer>
  );
};
