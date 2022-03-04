import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../API/axios";
import DocElement from "./DocElement";

function Doc() {
  const [doc, setDoc] = useState();

  useEffect(() => {
    async function callDoc() {
      const response = await instance
        .get("blog/document/")
        .then((r) => r.data)
        .catch((err) => err.message);
      setDoc(response);
    }
    callDoc();
  }, []);

  

  return (
    <div>
      <div className="mt-5">
        <h2 className="text-center">แมวแต่ละสายพันธ์ุ</h2>
      </div>

      <div className="row row-cols-4">
        {doc && doc.map((item) => (
          <Link className="col mt-4 product-link" to={`/doc/${item.id}`}>
            <DocElement {...item} key={item.id} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Doc;
