import NumberInput from "./NumberInput";
import Select from "react-select";
import Result from "./Result";
import { useState } from "react";
import { operations, calculate } from "../utils/calculate";

function CalculatorForm() {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [operation, setOperation] = useState(operations[0])
    const [result, setResult] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        const numberA = parseFloat(a);
        const numberB = parseFloat(b);                
        const computedResult = calculate(numberA, numberB, operation.value);
        setResult(computedResult); 
    }

    function handlerNumberAChange(event) {
        setA(event.target.value)
    }

    function handlerNumberBChange(event) {
        setB(event.target.value)
    }

    return (
        <div>
            <form className="CalculatorForm" onSubmit={handleSubmit}>
                <NumberInput name="a" label="První číslo:" onChange={handlerNumberAChange}/>
                <NumberInput name="b" label="Druhé číslo:" onChange={handlerNumberBChange}/>
                <Select options={operations} value={operation} onChange={setOperation}/>
                <input type="submit" value="Spočítej" />
            </form>
            <Result value={result}/>
        </div>
    );
}

export default CalculatorForm;