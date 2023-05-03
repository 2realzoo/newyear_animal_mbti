import ShareButtons from "../components/shareButtons";
import { results } from "../repository/results";
import "./resultPage.css";

function ResultPage({ result, setCondition, setCurrentResult }) {
  const handleClick = () => {
    setCondition({});
    setCurrentResult(results);
  };
  return (
    <div className="result_wrapper">
      <div className="result_header_wrapper">
        <p className="result_name_head">새해 나의 동물은...</p>
        <p className="result_modifier">{result.modifier}</p>
        <h1 className="result_name">{result.name}</h1>
      </div>
      <img src={result.img} className="result_image" alt="결과이미지" />
      <div className="result_like_wrapper">
        <p>좋아하는 것</p>
        <ul className="result_like">
          {result.like.map((el) => (
            <li key={result.resultId}>{el}</li>
          ))}
        </ul>
      </div>
      <div className="result_dislike_wrapper">
        <p>싫어하는 것</p>
        <ul className="result_dislike">
          {result.dislike.map((el) => (
            <li key={result.resultId}>{el}</li>
          ))}
        </ul>
      </div>
      <div className="result_friend_wrapper">
        <p className="result_friend_head">나와 찰떡궁합인 친구는?</p>
        <a className="result_friend_name" href={`/result/${result.friendId}`}>
          {result.friend}
        </a>
      </div>
      <div className="result_explain">{result.text}</div>
      <button className="result_restart_btn" onClick={handleClick}>
        <a href="/">다시하기</a>
      </button>
      <ShareButtons urlName={result.resultId} />
    </div>
  );
}

export default ResultPage;
