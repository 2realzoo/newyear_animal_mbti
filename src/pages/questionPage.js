import { Link, useNavigate } from "react-router-dom";
import "./questionPage.css";

function QuestionPage({
  question,
  questions,
  condition,
  setCondition,
  currentResult,
}) {
  let urlNum;

  if (question.id !== questions.length) {
    urlNum = `/q/${question.id + 1}`;
  }

  const handleClick = (e) => {
    let newCondition = {};
    newCondition[question.id] = e.target.id[e.target.id.length - 1];
    setCondition({ ...condition, ...newCondition });
  };

  const navigate = useNavigate();
  const handleResult = (resultId) => {
    navigate(`/result/${resultId}`);
  };
  const handleGoNext = (urlNum) => {
    navigate(urlNum);
  };
  return (
    <div className="question_wrapper">
      <progress
        className="progress_bar"
        value={(100 * question.id) / questions.length}
        max="100"></progress>
      <h2 className="question">
        <p>Q{question.id}</p>
        {question.question.map((el) => (
          <p key={el}>{el}</p>
        ))}
      </h2>
      {question.id === 12 ? (
        <div className="answer_btn_wrapper">
          <button
            id={`${question.id}answer_btn_1`}
            className="answer_btn"
            onClick={(e) => {
              handleClick(e);
              handleResult(currentResult.resultId);
            }}>
            {question.answers[1]}
          </button>
          <button
            id={`${question.id}answer_btn_2`}
            className="answer_btn"
            onClick={(e) => {
              handleClick(e);
              handleResult(currentResult.resultId);
            }}>
            {question.answers[2]}
          </button>
        </div>
      ) : (
        <div className="answer_btn_wrapper">
          <button
            id={`${question.id}answer_btn_1`}
            className="answer_btn"
            onClick={(e) => {
              handleClick(e);
              handleGoNext(urlNum);
            }}>
            {question.answers[1]}
          </button>

          <button
            id={`${question.id}answer_btn_2`}
            className="answer_btn"
            onClick={(e) => {
              handleClick(e);
              handleGoNext(urlNum);
            }}>
            {question.answers[2]}
          </button>
        </div>
      )}
    </div>
  );
}

export default QuestionPage;
