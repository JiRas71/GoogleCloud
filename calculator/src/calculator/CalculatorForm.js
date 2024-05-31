import React, { useState } from "react";
import NumberInput from "./NumberInput";
import Select from "react-select";
import Result from "./Result";
import { operations, calculate } from "../utils/calculate";

function CalculatorForm() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState(operations[0]);
  const [result, setResult] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const numberA = parseFloat(a);
    const numberB = parseFloat(b);
    const result = calculate(numberA, numberB, operation.value);
    setResult(result);
  };

  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-lg-4 text-center bg-light p-2 rounded">
          <img
            src={`${process.env.PUBLIC_URL}/calculator.png`}
            alt="Calculator"
            className="casio img-fluid p-0 m-0"
          />

          <form className="CalculatorForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <NumberInput
                name="a"
                label="První číslo: "
                onChange={(e) => setA(e.target.value)}
              />
            </div>

            <div className="form-group btn btn-sm my-2">
              <Select
                className="form-control border-0 bg-light"
                options={operations}
                value={operation}
                onChange={setOperation}
              />
            </div>

            <div className="form-group">
              <NumberInput
                name="b"
                label="Druhé číslo: "
                onChange={(e) => setB(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Spočítej"
                className="btn btn-sm btn-info btn-block my-2 text-light"
              />
              <button
                className="btn btn-sm btn-light border border-dark ms-3"
                type="reset"
              >
                Reset
              </button>
            </div>
            <div className="form-group fs-4">
              <Result value={result} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CalculatorForm;
