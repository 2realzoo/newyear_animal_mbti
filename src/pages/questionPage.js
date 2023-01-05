import { Link } from "react-router-dom";
import ResultPage from "./resultPage";
import findResult from "../components/findResult";

function QuestionPage ({ question, questions, condition, setCondition, setFilterResult, filterResult }) {
    let urlNum;
    question.id !== questions.length?
        urlNum = `/q/${question.id + 1}`
        :urlNum = `/result/${filterResult[0].resultId}`;

    const handleClick = (e) => {
        const key = question.id;
        let newCondition = {};
        newCondition[key] = e.target.id[e.target.id.length - 1];
        setCondition({...condition, ...newCondition});
        findResult(setFilterResult, filterResult, question.id, e.target.id.slice(-1));
        console.log(filterResult)
    }

    return (
        <div>
            <progress value={100 * question.id / questions.length} max="100"></progress>
            <h2>Q{question.id}</h2>
            <h2>{question.question}</h2>
            <div className="answer_btn_wrapper">
                <Link to={urlNum}>
                    <button id={`${question.id}answer_btn_1`} className='answer_btn' onClick={handleClick}>{question.answers[1]}</button>
                </Link>
                <Link to={urlNum}>
                    <button id={`${question.id}answer_btn_2`} className='answer_btn' onClick={handleClick}>{question.answers[2]}</button>
                </Link>
            </div>
        </div>
    )
}

export default QuestionPage;