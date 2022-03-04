import React from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import AccountBar from "./AccountBar";
import EditAddress from "./EditAddress";
import EditProfile from "./EditProfile";
import Favorite from "./Favorite";
import History from "./History";
import Password from "./Password";
import Profile from "./Profile";
import "./Profile.css";
import Return from "./Return";
import Review from "./Review";

function Account() {
  return (
    <div>
      <h1>My Account</h1>
      <div className="mt-4 ">
        <Routes>
          <Route path="/" element={<AccountBar />} >
            <Route index element={<Profile />} />

            <Route path="favorite" element={<Favorite />} />
            <Route path="password/" element={<Password />}/>
              <Route path="history" element={<History />} />
              <Route path="review" element={<Review />} />
              <Route path="return" element={<Return />} />
            <Route path="add/address" element={<EditAddress />} />
            <Route path="edit/profile" element={<EditProfile />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default Account;
