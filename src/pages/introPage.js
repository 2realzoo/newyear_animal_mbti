import { Link, useNavigate } from "react-router-dom";
import "./introPage.css";
import introImage from "../images/intro.jpg";

function Intro() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/q/1");
  };
  return (
    <div className="intro_wrapper">
      <div className="intro_text_wrapper">
        <p>새로운 해를 맞이한 당신,</p>
        <p>이번 해에는 어떤 모습으로 살고싶나요?</p>
      </div>
      <img className="intro_image" src={introImage} alt="메인이미지"></img>
      <button className="start_btn" onClick={handleClick}>
        시작하기
      </button>
    </div>
  );
}

export default Intro;
