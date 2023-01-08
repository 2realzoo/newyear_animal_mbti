import { Link } from "react-router-dom";
import './questionPage.css';

function QuestionPage ({ question, questions, condition, setCondition, setCurrentResult, currentResult }) {
    let urlNum;
    if(question.id !== questions.length) {
        urlNum = `/q/${question.id + 1}`;
    }
    const handleClick = (e) => {
        let newCondition = {};
        newCondition[question.id] = e.target.id[e.target.id.length - 1];
        setCondition({...condition, ...newCondition});
    }
    return (
        <div>
            <progress className="progress_bar" value={100 * question.id / questions.length} max="100"></progress>
            <h2>Q{question.id}</h2>
            <h2>{question.question}</h2>
            {question.id === 12?
            (<div className="answer_btn_wrapper">
                <Link to={`/result/${currentResult.resultId}`}>
                    <button id={`${question.id}answer_btn_1`} className='answer_btn' onClick={handleClick}>{question.answers[1]}</button>
                </Link>
                <Link to={`/result/${currentResult.resultId}`}>
                    <button id={`${question.id}answer_btn_2`} className='answer_btn' onClick={handleClick}>{question.answers[2]}</button>
                </Link>         
            </div>
            )
            :(<div className="answer_btn_wrapper">
                <Link to={urlNum}>
                    <button id={`${question.id}answer_btn_1`} className='answer_btn' onClick={handleClick}>{question.answers[1]}</button>
                </Link>
                <Link to={urlNum}>
                    <button id={`${question.id}answer_btn_2`} className='answer_btn' onClick={handleClick}>{question.answers[2]}</button>
                </Link>
            </div>)}
        </div>
    )
}

export default QuestionPage;