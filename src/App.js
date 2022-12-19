import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Intro from './pages/introPage';
import QuestionPage from './pages/questionPage';
import { Routes, Route } from 'react-router-dom';
import { questions } from './repository/questions';
import { results } from './repository/results';
import ResultPage from './pages/resultPage'
import { useState } from 'react';

function App() {
  const [condition, setCondition] = useState({});
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Intro />}></Route>
          {questions.map((question) => {
              return (
                <Route path={`/q/${question.id}`} 
                element={<QuestionPage question={question} 
                questions={questions} 
                condition={condition} 
                setCondition={setCondition}/>} key={question.id}>
                </Route>
              )
          })}
          {results.map((result) => {
            return (
              <Route path={`/result/${result.resultId}`} element={<ResultPage result={result} setCondition={setCondition}/>} key={result.resultId}></Route>
            )
          })}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
