import React from "react";
import { Link } from "react-router-dom";

function Task1() {
  return (
    <>
      <div>
        <Link to="/">← попереднє завдання</Link>
        <h1>Завдання 1</h1>
        <Link to="/">наступне завдання →</Link>
        <div>
          Виведіть в компоненті App поточний розмір вікна браузера. При
          необхіднотсі сервер і клієнт можуть повернути різний результат.
        </div>
      </div>
      <div>
        <h1>Рішення:</h1>
      </div>
    </>
  );
}

export default Task1;
