import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Intro from './pages/introPage';
import QuestionPage from './pages/questionPage';
import { results } from './repository/results';
import ResultPage from './pages/resultPage';
import { Routes, Route } from 'react-router-dom';
import { questions } from './repository/questions';
import { useState } from 'react';

function App() {
  const [condition, setCondition] = useState({});
  const [filterResult, setFilterResult] = useState(results);

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
                setCondition={setCondition}
                filterResult={filterResult}
                setFilterResult={setFilterResult}/>} 
                key={question.id}>
                </Route>
              )
          })}
          {results.map((result) => {
            return (
              <Route path={`/result/${result.resultId}`} 
              element={<ResultPage 
                result={result} 
                condition={condition} 
                setCondition={setCondition}
                filterResult={filterResult}
                setFilterResult={setFilterResult}/>} 
              key={result.resultId}>
              </Route>
            )
          })}
          {

          }
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
