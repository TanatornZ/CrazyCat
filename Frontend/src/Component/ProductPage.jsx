import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import axios from "../API/axios";
import ProductFooter from "./ProductFooter";
import { AuthContext } from "../API/Auth";
import instance from "../API/axios";

function ProductPage() {
  let params = useParams();

  const context = useContext(AuthContext);
  const user = context.inforUser;

  const [errorMessage, setErrorMessage] = useState(false);
  const [product, setProduct] = useState([]);
  const [howToUses, setHowToUses] = useState([]);
  const [detail, setDetail] = useState([]);
  const [image, setImage] = useState([]);
  const [total, setTotal] = useState(1);
  const [favorite, setFavorite] = useState([]);
  const [image1, setImage1] = useState([]);
  const [image2, setImage2] = useState([]);
  const [image3, setImage3] = useState([]);
  const [menu, setMenu] = useState(true);

  const properties = () => {
    setMenu(true);
  };

  const use = () => {
    setMenu(false);
  };

  const minusTotal = () => {
    if (total > 1) {
      setTotal(total - 1);
    }
  };

  const plusTotal = () => {
    if (total < product.amount) {
      setTotal(total + 1);
    } else {
      setErrorMessage(true);
    }
  };

  useEffect(() => {
    async function callProduct() {
      const response = await axios
        .get(`store/product/${params.productId}/`)
        .then((r) => r.data)
        .catch((err) => err.message);
      await setProduct(response);
      await setHowToUses(response.howToUseProduct);
      await setDetail(response.productdetail);
      await setImage(response.productimages[0].image);
      await setImage1(response.productimages[1].image);
      await setImage2(response.productimages[2].image);
      await setImage3(response.productimages[3].image);
    }
    async function callFavorite() {
      const response = await instance
        .get(`order/favoriteProduct/?customer=${user.id}`)
        .then((r) => r.data)
        .catch((err) => err.message);
      setFavorite(response);
    }
    callFavorite();
    callProduct();
  }, []);

  const favoriteProduct = favorite.map((item) => item.product);

  console.log(favoriteProduct);

  async function addCart(e) {
    e.preventDefault();
    const form = {
      product: params.productId,
      customer: user.id,
      Number_of_products_needed: total,
    };
    const response = await instance
      .post("order/basket/", form)
      .then((response) => response.data)
      .catch((err) => err.message);
    alert(`เพิ่มสินค้าลงตระกร้าเรียบร้อย`);
  }

  async function postHeart() {
    const form = new FormData();
    form.append("product", product.id);
    form.append("customer", user.id);
    const response = await instance
      .post("order/favoriteProduct/", form)
      .then(alert("ถูกใจสินค้าแล้ว"));
  }

  return (
    <div className="p-5">
      <div className="d-flex">
        <div className="product-left d-flex ">
          <img className="main-img border" src={image}></img>
          <div className="d-flex flex-column  ms-3">
            <img className="sub-img border" src={image1}></img>
            {image2.length > 0 && (
              <img className="sub-img border my-3" src={image2}></img>
            )}
            {image3.length > 0 && (
              <img className="sub-img border" src={image3}></img>
            )}
          </div>
        </div>
        <div className="product-right ms-5">
          <h2>{product.name}</h2>
          <h5 className="py-2">฿ {product.price}</h5>
          <div className="d-flex align-items-center ">
            <i className="fas fa-minus-circle" onClick={minusTotal}></i>
            <input className="input mx-3" type="number" value={total} />
            <i className="fas fa-plus-circle" onClick={plusTotal}></i>
          </div>
          {errorMessage ? (
            <p className="text-danger mt-3">
              สินค้ามีจำนวน {product.amount} ชิ้น
            </p>
          ) : (
            ""
          )}
          <div className="product-action d-flex mt-4 align-items-center">
            <button onClick={addCart} className="me-3 p-2 bg-white">
              <h5>เพิ่มไปยังตะกร้าสินค้า</h5>
            </button>
            {favoriteProduct.includes(product.id) ? (
              <i className="fas fa-heart heart"></i>
            ) : (
              <i className="far fa-heart heart" onClick={postHeart}></i>
            )}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="menu-product d-flex p-2">
          <h3 className={`menu ${menu && "use"} me-4`} onClick={properties}>
            รายละเอียด
          </h3>
          <h3 className={`menu ${!menu && "use"} me-4`} onClick={use}>
            วิธีใช้
          </h3>
        </div>
        <div className="text-menu">
          <div className={`properties ${menu && "active"} p-3`}>
            <h5>คุณสมบัติ</h5>
            <p className="ps-3">{detail.properTy}</p>
            <h5>ข้อควรระวัง</h5>
            <p className="ps-3">{detail.caution}</p>
          </div>
          <div className={`how-to-use ${!menu && "active"}  p-3`}>
            <h5>วิธีใช้</h5>
            {howToUses.map((items) => (
              <p className="ps-3">{items.howToUse}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <ProductFooter key="productFooter" />
      </div>
    </div>
  );
}

export default ProductPage;
