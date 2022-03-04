import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import instance from "../API/axios";
import QuestionContent from "./QuestionContent";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQuestion() {
      const response = await instance
        .get("blog/question/")
        .then((response) => response.data)
        .catch((error) => error.message);
      setQuestions(response)
    }
    getQuestion()
  }, []);

  return (
    <div className="">
      {questions && questions.map((question) => (
        <QuestionContent key={question.id} {...question} />
      ))}
    </div>
  );
}

export default QuestionList;
