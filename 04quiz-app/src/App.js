import "./App.css";
import Header from "./Components/Header";
import CategorySelection from "./Components/CategorySelection";
import QuestionCard from "./Components/QuestionCard";
import ResultPage from "./Components/ResultPage";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState(21);
  const [difficulty, setDifficulty] = useState("easy");
  const [showResults, setShowResults] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const fetchQuestions = async () => {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    );
    const data = await res.json();

    setQuestions(
      data.results.map((q) => ({
        question: q.question,
        options: [...q.incorrect_answers, q.correct_answer].sort(
          () => Math.random
        ),
        correct: q.correct_answer,
      }))
    );
  };

  const startQuiz = async () => {
    fetchQuestions();
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const handleAnswer = async (selected) => {
    if (selected === questions[currentQuestion].correct) {
      setScore((prev) => prev + 1);
    }

    const nextQuetion = currentQuestion + 1;
    if (nextQuetion < questions.length) {
      setCurrentQuestion(nextQuetion);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="App">
      <Header score={score} />
      {showResults ? (
        <ResultPage
          score={score}
          total={questions.length}
          restart={startQuiz}
        />
      ) : questions.length > 0 ? (
        <QuestionCard
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswer}
        />
      ) : (
        <CategorySelection
          setCategory={setCategory}
          setDifficulty={setDifficulty}
          startQuiz={startQuiz}
        />
      )}
    </div>
  );
}

export default App;
