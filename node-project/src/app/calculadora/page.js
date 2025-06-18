"use client";
import { useState } from "react";
import styles from "./page.module.css"

export default function Calculadora() {
    const [number, setNumber] = useState("0");

    function handleClick(value) {
        if (number === "0" && value !== "." && !isNaN(value)) {
            setNumber(value);
        } else {
            setNumber(number + value);
        }
    }

    function handleClickEqual() {
        try {
            const result = eval(number.replace(/x/g, "*").replace(/÷/g, "/"));
            setNumber(String(Math.round(result * 100000) / 100000));
        } catch (error) {
            setNumber("Error");
        }
    }

    function handleClickClear() {
        setNumber("0");
    }

    return (
        <div className={styles.calculator}>
            <div className={styles.display}>
                <p className="number">{number}</p>
            </div>
            <div className="keyboard">
                <div className="row">
                    <button className="button" onClick={() => handleClick("7")}>7</button>
                    <button className="button" onClick={() => handleClick("8")}>8</button>
                    <button className="button" onClick={() => handleClick("9")}>9</button>
                    <button className="button" onClick={() => handleClick("÷")}>÷</button>
                </div>

                <div className="row">
                    <button className="button" onClick={() => handleClick("4")}>4</button>
                    <button className="button" onClick={() => handleClick("5")}>5</button>
                    <button className="button" onClick={() => handleClick("6")}>6</button>
                    <button className="button" onClick={() => handleClick("x")}>x</button>
                </div>

                <div className="row">
                    <button className="button" onClick={() => handleClick("1")}>1</button>
                    <button className="button" onClick={() => handleClick("2")}>2</button>
                    <button className="button" onClick={() => handleClick("3")}>3</button>
                    <button className="button" onClick={() => handleClick("-")}>-</button>
                </div>

                <div className="row">
                    <button className="button" onClick={() => handleClick("0")}>0</button>
                    <button className="button" onClick={() => handleClick(".")}>.</button>
                    <button className="button" onClick={handleClickEqual}>=</button>
                    <button className="button" onClick={() => handleClick("+")}>+</button>
                </div>

                <button className="button" onClick={handleClickClear}>Clear</button>
            </div>
        </div>
    );
}
