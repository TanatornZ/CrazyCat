import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../API/Auth";
import instance from "../API/axios";
import QuestionAnswer from "./QuestionAnswer";

function QuestionContent(props) {
  // const [user, setUser] = useState([]);
  const [comment, setComment] = useState([]);
  const [answers, setAnswers] = useState([]);

  const context = useContext(AuthContext);
  const user = context.inforUser;

  const {
    id,
    questionimages,
    question,
    number_of_likes,
    posted_by,
    date_post,
  } = props;

  const year = date_post.slice(0, 4);
  const mount = date_post.slice(5, 7);
  const day = date_post.slice(8, 10);

  useEffect(() => {
    async function getAnswer() {
      const response = await instance
        .get(`blog/answer/?question__id=${id}`)
        .then((response) => response.data)
        .catch((error) => error.message);
      setAnswers(response);
    }
    getAnswer();
  }, []);

  const likePost = () => {
    async function like() {
      const form = {
        question,
        posted_by,
        number_of_likes: number_of_likes + 1,
      };
      const response = await instance.put(`blog/question/${id}/`, form);
    }
    like();
  };

  const coment = (e) => {
    e.preventDefault();
    async function postcoment() {
      const form = { question: id, res_by: user.id, answer: comment };
      const response = await instance.post(`blog/answer/`, form);
    }
    postcoment();
  };

  return (
    <div>
      <div className="question-post p-4 rounded mt-5">
        <div className="question-head d-flex justify-content-between w-100">
          <div className=" d-flex align-items-center">
            <img
              className="user-question"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png"
            />
            <div className="mx-3">
              <div className="">
                <p>user</p>
                <p>
                  {day}/{mount}/{year}
                </p>
              </div>
            </div>
          </div>
          <div class="p-3">
            <i class="fas fa-bars fs-3"></i>
          </div>
        </div>
        <div className="question-body d-flex mt-2">
          <div className="question-text px-5 py-2">
            <h4>{question}</h4>
          </div>
          {questionimages[0]?.image && (
            <img className="p-3 question-img" src={questionimages[0].image} />
          )}
        </div>
        <p className="px-2">{number_of_likes} like</p>
        <hr></hr>
        <div className="question-end p-3 d-flex justify-content-center">
          <button
            className="border rounded-circle p-3 bg-light"
            onClick={likePost}
          >
            <i class="far fa-thumbs-up"></i>
          </button>
          <form className="d-flex w-75" onSubmit={coment}>
            <div className="w-100 mx-4">
              <input
                className="question-comment w-100  mt-1 p-4"
                type="text"
                placeholder="Click here to reply or forward"
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <Button type="submit">comment</Button>
          </form>
        </div>
        <div>
          {answers && answers.map((answer) => <div class="mx-4">
            <QuestionAnswer key={answer.id} {...answer} />
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default QuestionContent;
