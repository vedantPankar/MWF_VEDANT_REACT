import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
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
      `https://opentdb.com/api.php?amount=10&category${category}&difficulty=${difficulty}&type=multiple`
    );
    const data = res.json();

    setQuestions(
      data.results.map((q) => ({
        question: q.question,
        options: [...q.incirrect_answers, q.correct_answers].sort(
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
  };

  const nextQuetion = currentQuestion + 1;
  if (nextQuetion < questions.length) return <Header score={score} />;
}

export default App;
