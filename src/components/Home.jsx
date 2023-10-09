import React from "react";
import { Link } from "react-router-dom";

import Layout from "./Layout";

function Home() {
  return (
    <Layout>
      <h1>Привіт! Тобі необхідно вирішити всі задачі із меню ліворуч</h1>
      Перед тим, як ти почнеш виконувати їх, прочитай невеличку інструкцію
      нижче:
      <ul>
        <li>
          Проект зібран із SSR, тож після того, як виконаєш кожну задачу,
          виконай команду yarn build, потім yarn start, щоб переконатися, що
          твій код успішно працює в обох середовищах - серверному та
          клієнтському.
        </li>
        <li>Умови задачі видаляти непотрібно, працюй із секцією "Рішення"</li>
      </ul>
    </Layout>
  );
}

export default Home;
