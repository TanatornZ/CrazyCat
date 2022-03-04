import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../API/axios";

function DocPage() {
  let params = useParams();

  const [doc, setDoc] = useState('');
  const [img, setImg] = useState('');
  useEffect(() => {
    async function callDoc() {
      const response = await instance
        .get(`blog/document/${params.docId}/`)
        .then((r) => r.data)
        .catch((err) => err.message);
      await setDoc(response);
      await setImg(response.images[0].image);
    }
    callDoc();
  }, []);

  

  return (
    <div className="mt-5 p-4">
      <div className="d-flex justify-content-center w-100">
        <img className="w-50" src={img} />
      </div>
      <div>
        <h1 className="mt-4 text-center">{doc.title}</h1>
        <h4 className="mx-4 p-2">{doc.descrioption}</h4>
        <h2>ลักษณะทั่วไป</h2>
        <h5 className="mx-4 p-2">{doc.general_characteristics}</h5>
        <h2>อุปนิสัย</h2>
        <h5 className="mx-4 p-2">{doc.Habits}</h5>
        <h2>การดูแล</h2>
        <h5 className="mx-4 p-2">{doc.care}</h5>
      </div>
    </div>
  );
}

export default DocPage;
