import React from "react";

function PaymentList() {
  return (
    <div>
      <div className="payment-bar bg-success">
        <div className="p-4 row">
          <img
            className="col-4"
            src="https://tailybuddy.com/products/4184/%e0%b8%9b%e0%b8%a5%e0%b8%b2%e0%b8%97%e0%b8%b9%e0%b8%99%e0%b9%88%e0%b8%b2%e0%b8%81%e0%b8%b8%e0%b9%89%e0%b8%87_%e0%b9%83%e0%b8%99%e0%b8%99%e0%b9%89%e0%b8%b3%e0%b9%80%e0%b8%81%e0%b8%a3%e0%b8%a7%e0%b8%b5%e0%b9%88%e0%b8%ab%e0%b8%ad%e0%b8%a22.jpg"
          />
          <div className="cart-list-text col-5">
            <h5>ชื่อสินค้า</h5>
            <p>description</p>
          </div>
          <p className="text-end col-3">300฿</p>
        </div>
        <div className="p-3">
          {/* list cart */}
          <hr></hr>
          <div class="d-flex justify-content-between">
            <p>ยอดรวม</p>
            <p>200</p>
          </div>
          <div class="d-flex justify-content-between">
            <p>ค่าบริการการส่ง</p>
            <p>200</p>
          </div>
          <div className="d-flex justify-content-center">
            <div className="btn btn-light border rounded">
              ดำเนินการชำระเงิน
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentList;
