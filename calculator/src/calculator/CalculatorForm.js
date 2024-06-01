import React, { useState, useEffect } from "react";
import NumberInput from "./NumberInput";
import Select from "react-select";
import Result from "./Result";
import { operations, calculate } from "../utils/calculate";

function CalculatorForm() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState(operations[0]);
  const [result, setResult] = useState(0);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  useEffect(() => {
    if (isSoundEnabled) {
      const audio = new Audio(`${process.env.PUBLIC_URL}/cink.mp3`);
      audio.play();
    }
  }, [isSoundEnabled]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const numberA = parseFloat(a);
    const numberB = parseFloat(b);
    const result = calculate(numberA, numberB, operation.value);
    setResult(result);

    if (isSoundEnabled) {
      const audio = new Audio(`${process.env.PUBLIC_URL}/cink.mp3`);
      audio.play();
    }
  };

  const toggleSound = () => {
    setIsSoundEnabled((prev) => !prev);
  };

  const handleReset = () => {
    setA(0);
    setB(0);
    setOperation(operations[0]);
    setResult(0);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-5 text-center bg-light">
        <h2 className="nadpis mt-2">Kalkulačka</h2>
        <img
          src={`${process.env.PUBLIC_URL}/calculator.png`}
          alt="Calculator"
          className="mb-2"
          style={{ maxWidth: "65%" }}
        />

        <form className="CalculatorForm" onSubmit={handleSubmit}>
          <div className="zadani py-3 rounded">
            <div className="form-group">
              <NumberInput
                name="a"
                label="Zadej 1. číslo: "
                onChange={(e) => setA(e.target.value)}
                value={a}
              />
            </div>

            <div className="form-group d-flex align-items-center justify-content-center">
              <label className="">Vyber akci:</label>
              <Select
                className="funkce my-2 ms-1 border border-dark"
                options={operations}
                value={operation}
                onChange={setOperation}
              />
            </div>

            <div className="form-group rounded text-center">
              <NumberInput
                name="b"
                label="Zadej 2. číslo: "
                onChange={(e) => setB(e.target.value)}
                value={b}
              />
            </div>
          </div>
          <div className="form-group align-items-center">
            <input
              type="submit"
              value="Spočítej"
              className="spocitej my-3 rounded"
            />
            <button
              className="reset rounded border border-dark my-3 ms-3"
              type="button"
              onClick={handleReset}
            >
              Reset
            </button>

            <span
              className="zvuk ms-3 fs-4"
              onClick={toggleSound}
              style={{ cursor: "pointer" }}
            >
              {isSoundEnabled ? "🔈" : "🔇"}
            </span>
            
          </div>
          <div className="vysledek form-group fs-4 py-2 mb-2 text-light">
            <Result value={result}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CalculatorForm;