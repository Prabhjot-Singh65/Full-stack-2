import React, { useState } from "react";

function App() {

  const students = ["Rahul", "Aman", "Priya", "Simran", "Rohit"];

  const [number, setNumber] = useState(5);

  return (
    <div>
      <h2>Student List</h2>

      <label>Select how many students to show: </label>

      <select onChange={(e) => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">All</option>
      </select>

      <ul>
        {students.slice(0, number).map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;