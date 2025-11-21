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

  const fetchQuestions = async () => {};

  const startQuiz = async () => {};

  const handleAnswer = async () => {};
  return <Header score={score} />;
}

export default App;
