import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../API/Auth';
import instance from '../API/axios';

function AddressList(props) {

  const navigate = useNavigate()

  const context = useContext(AuthContext);
  const user = context.inforUser

  const {id ,house_number , sub_district ,district ,province ,postal} = props

  async function DeleteAddress() {
    const response = await instance
                      .delete(`account/address/${id}/`)
                      .then((r) => r.data)
                      .catch((err) => err.message);
    navigate("/account");
  }

  return (
    <div className="p-1">
        <div className='mt-1 address-list d-flex justify-content-between p-3 align-items-center rounded'>
            <div>
                <p>{user.first_name} {user.last_name}</p>
                <p>{house_number} ต.{sub_district} อ.{district} จ.{province} {postal}</p>
                <p>เบอร์ติดต่อ {user.tel}</p>
            </div>
            <div>
                <Button variant="warning" onClick={DeleteAddress} className='button-auth'>ลบ</Button>
            </div>
        </div>
    </div>
  )
}

export default AddressList