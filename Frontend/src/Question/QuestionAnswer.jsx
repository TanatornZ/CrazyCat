import React, { useEffect, useState } from "react";
import instance from "../API/axios";

function QuestionAnswer(props) {
  const [image, setImage] = useState([]);
  const { answer, res_date, answerimages } = props;

  const year = res_date.slice(0, 4);
  const mount = res_date.slice(5, 7);
  const day = res_date.slice(8, 10);

  return (
    <>
        <hr className='px-4'></hr>
      <div class="px-5 mt-4 d-flex">
        <div class="ms-4">
          <img
            className="answer-user-image mt-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png"
          />
        </div>
        <div className="ms-4 w-75">
          <div class="lh-1">
            <h5>user </h5>
            <span className="opacity-75">
              {day}/{mount}/{year}
            </span>
          </div>
          <p className="mt-3">{answer}</p>
        </div>
        {/* <div class="">
          <img className="answer-img " src={answerimages[0].image} />
        </div> */}
      </div>
    </>
  );
}

export default QuestionAnswer;
