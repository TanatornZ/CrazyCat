import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./product.css";
import instance from "../API/axios";
import { AuthContext } from "../API/Auth";

export const Product = ({ id }) => {

  const context = useContext(AuthContext);
  const user = context.inforUser;

  const [favorite, setFavorite] = useState(false);

  const [product, setProduct] = useState([]);
  const [detail, setDetail] = useState([]);
  const [image, setImage] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    async function callProduct() {
      const response = await instance
        .get(`store/product/${id}/`)
        .then((r) => r.data)
        .catch((err) => err.message);
      setProduct(response);
      setDetail(response.productdetail.properTy);
      setImage(response.productimages[0].image);
    }
    async function callFavorite() {
      const response = await instance
        .get(`order/favoriteProduct/?customer=${user.id}`)
        .then((r) => r.data)
        .catch((err) => err.message);
      setFavoriteList(response)
    }
    callProduct();
    callFavorite();

  }, []);

  const favoriteProduct = favoriteList.map((item) => item.product)

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  async function postHeart() {
    const form = new FormData();
    form.append("product" , product.id)
    form.append('customer' ,user.id)
    const response = await instance.post('order/favoriteProduct/',form).then(alert('ถูกใจสินค้าแล้ว'))
  };

  async function deleteHeart () {
    const response = await instance.get('order/favoriteProduct/')
  };

  

  return (
    <div className="">
      <Card className="p-3 card">
        <Link
          className="w-100 h-100 product-link"
          as={Link}
          to={`/product/${product.id}`}
        >
          <Card.Img className="img" variant="top" src={image} />
          <Card.Body>
            <Card.Title>
              <h5>{truncate(product.name, 15)}</h5>
            </Card.Title>
            <Card.Text>
              <p className="opacity-75">{truncate(detail, 30)}</p>
            </Card.Text>
          </Card.Body>
        </Link>
        <div className="d-flex justify-content-between px-2">
          {favoriteProduct.includes(product.id) ? (
            <i className="fas fa-heart heart" onClick={deleteHeart}></i>
          ) : (
            <i className="far fa-heart heart" onClick={postHeart}></i>
          )}
          <p className="text-end">฿ {product.price}</p>
        </div>
      </Card>
    </div>
  );
};
