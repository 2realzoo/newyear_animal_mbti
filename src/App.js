import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Intro from "./pages/introPage";
import QuestionPage from "./pages/questionPage";
import { results } from "./repository/results";
import ResultPage from "./pages/resultPage";
import { Routes, Route } from "react-router-dom";
import { questions } from "./repository/questions";
import { useEffect, useState } from "react";
import findResult from "./components/findResult";

function App() {
  const [condition, setCondition] = useState({});
  const [currentResult, setCurrentResult] = useState({});

  useEffect(() => {
    setCurrentResult(findResult(results, condition));
  }, [condition]);
  return (
    <div className="App">
      <div className="body_wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          {questions.map((question) => {
            return (
              <Route
                path={`/q/${question.id}`}
                element={
                  <QuestionPage
                    question={question}
                    questions={questions}
                    condition={condition}
                    setCondition={setCondition}
                    currentResult={currentResult}
                    setCurrentResult={setCurrentResult}
                  />
                }
                key={question.id}></Route>
            );
          })}
          {results.map((result) => {
            return (
              <Route
                path={`/result/${result.resultId}`}
                element={
                  <ResultPage
                    result={result}
                    condition={condition}
                    setCondition={setCondition}
                    currentResult={currentResult}
                    setCurrentResult={setCurrentResult}
                  />
                }
                key={result.resultId}></Route>
            );
          })}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
