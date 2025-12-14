import React, { useState } from "react";
import styles from "./Calculator.module.css"; // Import CSS module

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("Add");
  const [results, setResults] = useState([]);

  const performAction = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      alert("Please enter valid numbers");
      return;
    }

    let result;
    switch (operation) {
      case "Add":
        result = a + b;
        break;
      case "Subtract":
        result = a - b;
        break;
      case "Multiply":
        result = a * b;
        break;
      default:
        result = "Invalid operation";
    }

    setResults([...results, `${operation}: ${result}`]);
  };

  return (
    <div className={styles.container}>
      <h2>Basic Calculator</h2>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        className={styles.input}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        className={styles.input}
      />

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        className={styles.select}
      >
        <option value="Add">Add</option>
        <option value="Subtract">Subtract</option>
        <option value="Multiply">Multiply</option>
      </select>

      <button onClick={performAction} className={styles.button}>
        Perform Action
      </button>

      <div className={styles.resultList}>
        <h3>Results:</h3>
        <ul>
          {results.map((res, index) => (
            <li key={index} className={styles.resultItem}>
              {res}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calculator;