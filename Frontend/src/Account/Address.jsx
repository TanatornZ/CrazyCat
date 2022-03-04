import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import instance from '../API/axios';
import  AddressList  from './AddressList' ;

function Address(props) {

    const {first_name , last_name , tel , id} = props

    const [house , setHouse] = useState(null);
    // const [subDistrict , setSubDistrict] = useState(null);
    // const [District , setDistrict] = useState(null);
    // const [province , setProvince] = useState(null);

    useEffect(() => {
    async function getAddress() {
      const response = await instance
        .get(`account/address/?customer=${id}/`)
        .then((r) => r.data)
        .catch((err) => err.message);
      setHouse(response)
    }
    getAddress();
  }, []);

  

  return (
    <div className="in mt-4">
        <h3>ที่อยู่การจัดส่งเริ่มต้น</h3>
        {house && house.map((item) => (
            <AddressList {...item} key={item.id} first={first_name} last={last_name} tel={tel}/>
        ))}
        
        <div className="p-3">
          <Button variant="warning" className="mt-3" as={Link} to="add/address">
            เพิ่มที่อยู่ใหม่
          </Button>
        </div>
      </div>
  )
}

export default Address ;