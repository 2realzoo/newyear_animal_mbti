import { results } from "../repository/results";
import './resultPage.css';

function ResultPage({ result, condition, setCondition, filterResult, setFilterResult }) {
    const handleClick = () => {
        setCondition({});
        setFilterResult(results);
    }
    return (
        <div className="result_wrapper">
            <div className="result_header">
                <p className="result_name_friend">새해 나의 동물은...</p>
                <p className="result_modifier">{result.modifier}</p>
                <h1 className="result_name">{result.name}</h1>
            </div>
            <img src={result.img} className="result_image" />
            <div className="result_like_wrapper">
                <p>좋아하는 것</p>
                <ul className="result_like">
                    {result.like.map(el => <li>{el}</li>)}
                </ul>  
            </div>
            <div className="result_dislike_wrapper">
                <p>싫어하는 것</p>
                <ul className="result_dislike">
                    {result.dislike.map(el => <li>{el}</li>)}
                </ul>  
            </div>
            <div className="result_explain">{result.text}</div>
            <button className="result_restart_btn" onClick={handleClick}><a href="/">다시하기</a></button>
        </div>
    )
}

export default ResultPage;