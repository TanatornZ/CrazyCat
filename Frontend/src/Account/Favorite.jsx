import React, { useEffect, useState } from "react";
import instance from "../API/axios";
import { Product } from "../Component/Product";

function Favorite() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    async function getFavorite() {
      const response = await instance
        .get("order/favoriteProduct/")
        .then((r) => r.data)
        .catch((err) => err.message);
      setFavorite(response)
    }
    getFavorite()
  }, []);

  console.log(favorite);
  return (
    <div className="in">
      <h2>รายการโปรด</h2>
      <div className="row row-cols-3 p-3">
        {favorite.map((item) => (
          <div className="col">
            <Product key={item.id}  id={item.product}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorite;
