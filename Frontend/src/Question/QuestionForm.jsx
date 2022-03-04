import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Image } from "react-bootstrap";
import { AuthContext } from "../API/Auth";
import instance from "../API/axios";

function QuestionForm() {
  const context = useContext(AuthContext);
  const user = context.inforUser;
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [qid, setQid] = useState(0);

  async function Post(e) {
    e.preventDefault();
    async function postQuestion() {
      const form = { question: text, posted_by: user.id, number_of_likes: 0 };
      const response = await instance
        .post("blog/question/", form)
        .then((response) => response.data)
        .catch((err) => err.message);

      const form2 = new FormData();
      form2.append("image", image);
      form2.append("question", response.id);
      const response2 = await instance.post(`blog/questionimage/`, form2).then(()=> alert('ทำการโพสคำถามเรียบร้อย'));
    }
    await postQuestion();
  }

  const getImage = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <div className="form-question d-flex p-3">
        <form className="w-100" onSubmit={Post}>
          <div className="d-flex form-content">
            <div className="border-end border-3 form-text d-flex m-3 ">
              <img className="user-question" src={user.profile_image} />
              <textarea
                className="w-100 mx-3 p-3"
                name="border"
                placeholder="คุณกำลังคิดอะไรอยู่"
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <div className="p-3 d-flex justify-content-center w-25 align-items-center">
              {image? <img width='120' height='120' src={URL.createObjectURL(image)} ></img> :<div className='mt-4'>
                <label className="form-img" for="upload-question-img"></label>
                <input
                  type="file"
                  id="upload-question-img"
                  name="myImage"
                  onChange={getImage}
                />
              </div>}
            </div>
          </div>
          <div className="text-end me-5">
            <Button variant="warning" type="submit" className="w-25">
              อัพโหลด
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuestionForm;
