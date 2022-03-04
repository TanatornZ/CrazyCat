import React, { useEffect, useState } from "react";
import "./shop.css";
import instance from "../API/axios";
import { Product } from "../Component/Product";
import { Link } from "react-router-dom";

function Shop() {
  const [toggle, setToggle] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function callProduct() {
      const response = await instance
        .get("store/product/")
        .then((r) => r.data)
        .catch((err) => err.message);
      setProducts(response);
    }
    callProduct();
  }, []);

  console.log(products)

  return (
    <div className="">
      <div className="">
        <div className="row row-cols-4 p-5">
          {products.map((product) => (
            <div className="col mt-4" >
              <Product {...product} key={product.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
