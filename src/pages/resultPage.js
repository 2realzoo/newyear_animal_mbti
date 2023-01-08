import { results } from "../repository/results";

function ResultPage({ result, condition, setCondition, filterResult, setFilterResult }) {
    const handleClick = () => {
        setCondition({});
        setFilterResult(results);
    }
    return (
        <div>
            <h3>새해 나의 동물은...</h3>
            <h2>{result.name}</h2>
            <img src={result.img} className="result_img" />
            <div>{result.text}</div>
            <div>{result.friend}</div>
            <button onClick={handleClick}><a href="/">다시하기</a></button>
        </div>
    )
}

export default ResultPage;