// Imports
import { useEffect, useState } from "react";
import "./App.css";  // Make sure this is included

//Set expected data types
interface Problem {
  problem: string;
  solution: number;
}

function App() {

  const [problem, setProblem] = useState<Problem | null>(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

// Fetch the problem from the API 
// Problem is parsed from json to string
// Answer and feedback are initially empty
const fetchProblem = async () => {
    const res = await fetch("http://127.0.0.1:8000/generate-linear"); // Without await, the function would continue running before the request finishes — leading to bugs.
    const data = await res.json();
    setProblem(data);
    setAnswer("");
    setFeedback("");
  };

// Fetch a problem at start
  useEffect(() => {
    fetchProblem();
  }, []); // empty array makes it run ONCE

// Parse answer into float and check if correct or not
  const handleSubmit = () => {
    if (!problem) return;

    const userAnswer = parseFloat(answer);
    if (isNaN(userAnswer)) {
      setFeedback("❌ Please enter a valid number.");
    } else if (userAnswer === problem.solution) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Incorrect.");
    }
  };

// Show laoding message while fetching problem
  if (!problem) return <div>Loading...</div>;

// Rendered TSX
  return (
    <div className="app-container">
      <h1>Algebra 1 Practice</h1>
      <p className="problem"><strong>Problem:</strong> {problem.problem}</p>

      <div className="input-group">
        <input
          type="number"
          placeholder="Enter your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button onClick={handleSubmit}>Check Answer</button>
      </div>

      <p className="feedback">{feedback}</p>

      <button onClick={fetchProblem} className="next-button">Next Question</button>
    </div>
  );
}

export default App;
