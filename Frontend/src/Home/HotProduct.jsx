import React, { useRef, useState } from "react";
import { Product } from "../Component/Product";
import "./stlye.css";
export const HotProduct = () => {
  let scrl = useRef(null);
  const [scroll, setScroll] = useState(0);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setScroll(scroll + shift);
  };

  return (
    <div className="mt-5">
      <h3 className="text-start">สินค้าขายดี</h3>
      <div
        style={{ display: "flex", width: "100%", height: "100%" }}
        className="justify-content-between mt-4"
      >
        <button className="button left m-2" onClick={() => slide(-500)}>
          <i class="fas fa-chevron-left"></i>
        </button>
        <ul class="list" ref={scrl}>
          <li className="item">
            <Product id={1} key={1} />
          </li>
          <li className="item">
            <Product id={2} key={2} />
          </li>
          <li className="item">
            <Product id={3} key={3} />
          </li>
          <li className="item">
            <Product id={4} key={4} />
          </li>
          <li className="item">
            <Product id={5} key={5} />
          </li>
          <li className="item">
            <Product id={6} key={6} />
          </li>
        </ul>
        <button className="button right m-2" onClick={() => slide(500)}>
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};
