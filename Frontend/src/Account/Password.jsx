import React from "react";
import { Button, Form } from "react-bootstrap";

function Password() {
  return (
    <div className="in">
        <h2>เปลี่ยนรหัสผ่าน</h2>
      <Form className="mt-3">
        <Form.Group className="mb-3" controlId="prevPass">
          <Form.Label>รหัสผ่านเก่า</Form.Label>
          <Form.Control type="email" placeholder="รหัสผ่านเก่า" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="newPass">
          <Form.Label>รหัสผ่านใหม่</Form.Label>
          <Form.Control type="password" placeholder="รหัสผ่านใหม่" />
        </Form.Group>
       

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>ยืนยันรหัสผ่านใหม่</Form.Label>
          <Form.Control type="password" placeholder="ยืนยันรหัสผ่าน" />
        </Form.Group>
        
        <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit" className="justify-content-end">
              Submit
            </Button>
        </div>
      </Form>
    </div>
  );
}

export default Password;
