import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { NavBar } from "./Component/Navbar";
import { Container } from "react-bootstrap";
import { Home } from "./Home/Home";
import Account from "./Account/Account";
import Shop from "./shop/Shop";
import { Footer } from "./Component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductPage from "./Component/ProductPage";
import { Question } from "./Question/Question";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Cart from "./Cart/Cart";
import { AuthProvider } from "./API/Auth";
import Doc from "./Doc/Doc";
import DocPage from "./Doc/DocPage";
import CheckOrder from "./Payment/CheckOrder";
import Tranfer from "./Payment/Tranfer";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Container className="mt-4 content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Shop />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/doc" element={<Doc />} />
            <Route path="/payment" element={<CheckOrder />} />
            <Route path="/payment/:paymentId" element={<Tranfer />} />
            <Route path="/doc/:docId" element={<DocPage />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/question" element={<Question />} />
            <Route path="/account/*" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem", textAlign: "center" }}>
                  <p>There's nothing here!</p>
                  <Link to="/">Home</Link>
                </main>
              }
            />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
