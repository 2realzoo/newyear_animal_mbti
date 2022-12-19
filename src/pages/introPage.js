import { Link } from 'react-router-dom'
import './introPage.css'

function Intro() {
    return (
        <div className='intro_wrapper'>
            <img src="" className="intro_img"/>
            <div className='intro_text_wrapper'>
                <p>새로운 해를 맞이한 당신,</p>
                <p>이번 해에는 어떤 모습으로 살고싶나요?</p>
            </div>
            <Link to='/q/1'>
                <button className='start_btn'>시작하기</button>
            </Link>
        </div>
    )
}

export default Intro;