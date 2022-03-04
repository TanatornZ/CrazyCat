import React from "react";

function HistoryList(props) {

    const year = props.order_date.slice(0, 4);
  const mount = props.order_date.slice(5, 7);
  const day = props.order_date.slice(8, 10);

  return (
    <div className='p-2'>
      <div className="d-flex p-3 justify-content-between bg-white align-items-center">
        <div>
            <h5>รอการตรวจสอบ</h5>
            <h6>สั่งวันที่ : {day}/{mount}/{year}</h6>
        </div>
        <h5>''{props.status}''</h5>
      </div>
    </div>
  );
}

export default HistoryList;
