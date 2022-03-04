import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../API/Auth";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

export function Question() {

const context = useContext(AuthContext);
  const currentUser = context.currentUser;
  return (
    <div>
      {/* <h1 className="text-center">Question</h1> */}
      <div className="d-flex">
        <div className="w-75 p-3">
          {currentUser ? <QuestionForm key='form' /> : <Link to='/login' ><h3 className="text-center">กรุณาเข้าสู่ระบบก่อนถึงจะถามคำถามได้</h3></Link>}
          <QuestionList key="question" />
        </div>
        {/* ยังไม่ได้ทำ */}
        <div className="w-25 p-3 hastag mt-3">
          <h2>ความนิยม</h2>
          <p>#new</p>
          
        </div>
      </div>
    </div>
  );
}

export default Question;
