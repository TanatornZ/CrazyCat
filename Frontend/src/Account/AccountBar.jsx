import React from "react";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="d-flex">
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        className="text-dark fs-5"
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && "*"}
    </div>
  );
}

function AccountBar() {
  return (
    <div className="d-flex">
      <ul className="profile_bar rounded">
        <li>
          <CustomLink to="/account">ข้อมูลส่วนตัว</CustomLink>
        </li>
        <li>
          <CustomLink to="/account/favorite">รายการโปรด</CustomLink>
        </li>
        <li>
          <CustomLink to="/account/history">ประวัติการสั่งซื้อ</CustomLink>
        </li>
        <li>
          <CustomLink to="/account/review">รีวิวสินค้าของฉัน</CustomLink>
        </li>
        <li>
          <CustomLink to="/account/return">การคืนสืนค้า</CustomLink>
        </li>
        <li>
          <CustomLink to="/account/password">รหัสผ่านและความปลอดภัย</CustomLink>
        </li>
      </ul>
      <div className="w-100">
        <Outlet />
      </div>
    </div>
  );
}

export default AccountBar;
