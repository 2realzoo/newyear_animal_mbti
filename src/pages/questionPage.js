import { Link } from "react-router-dom";

function QuestionPage ({ question, questions, condition, setCondition }) {
    let urlNum;
    question.id !== questions.length?
        urlNum = `/q/${question.id + 1}`
        :urlNum = `/result/1`;

    const handleClick = (e) => {
        const key = e.target.className[0];
        let newCondition = {};
        newCondition[key] = e.target.className[-1]
        setCondition({...condition, ...newCondition})
    }

    return (
        <div>
            <h2>Q{question.id}</h2>
            <h2>{question.question}</h2>
            <div>{question.imgUrl}</div>
            <Link to={urlNum}>
                <button className={`${question.id}answer_btn_1`} onClick={handleClick}>{question.answers[1]}</button>
            </Link>
            <Link to={urlNum}>
                <button className={`${question.id}answer_btn_2`} onClick={handleClick}>{question.answers[2]}</button>
            </Link>
        </div>
    )
}

export default QuestionPage;