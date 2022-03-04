import React, { useEffect, useState } from 'react'
import {Product} from '../Component/Product'
import axios from '../API/axios'


export function ProductFooter() {
    // const [product , setProduct] = useState([]) ;
    // useEffect(() => {
    //     async function callProduct() {
    //     const response = await axios
    //         .get(`store/product/1/`)
    //         .then((r) => r.data)
    //         .catch((err) => err.message);
    //     setProduct(response);
    //     }
    //     callProduct();
    // }, []);
    
  return (
    <div><h3 className='text-center'>คุณอาจจะชอบสิ่งนี้</h3>
    <hr></hr>
    <ul className='d-flex justify-content-between'>
            <li className='me-3'><Product id={1} key={1}/></li>
            <li className='me-3'><Product id={2} key={2}/></li>
            <li className='me-3'><Product id={3} key={3}/></li>
            <li className='me-3'><Product id={4} key={4}/></li>
          </ul>
    </div>
  )
}

export default ProductFooter