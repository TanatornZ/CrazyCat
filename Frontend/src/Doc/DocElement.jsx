import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

function DocElement({ title , images}) {

  const [img , setImg] = useState();

  useEffect(() => {
  setImg(images[0].image)
 },[])

  
  const docImg = "url(" + img + ")";
 
  return (
    <div className="mt-3 doc">
      <h3 className="doc-title text-center">{title}</h3>
      <div className="doc-ele d-flex flex-column rounded-pill shadow-lg" style={{backgroundImage: docImg}}>
      </div>
    </div>
  );
}

export default DocElement;
