import React from "react";
import { Link } from "react-router-dom";

import Layout from "./Layout";

function Home() {
  return (
    <Layout>
      <h1>Привіт! Тобі необхідно вирішити задачу верхнього меню</h1>
      Перед тим, як ти почнеш виконувати її, прочитай невеличку інструкцію
      нижче:
      <ul>
        <li>
          Ліва частина вікна містить секцію Files із структурою проекта, файли
          котрого ти будеш редагувати.
        </li>
        <li>
          Центральна частина вікна - зона редагування коду, нижче знаходиться
          термінал для виконання команд апп.
        </li>
        <li>
          Права частина вікна - зона браузера для перегляду результата виконання
          коду.
        </li>
        <li>
          Проект побудований з підтримкою Server-Side Rendering, тож після того,
          як виконаєш задачу, перезапусти команду yarn build, потім yarn start,
          щоб переконатися, що твій код успішно працює в обох середовищах -
          серверному та клієнтському. Кнопка перезапуску з'являється при ховері
          по секції термінала.
        </li>
        <li>
          Після першої зміни любого файла проекта біля його назви (верхня
          частина секції редагування коду) з'явиться маленький кружечок - ознака
          незбережених змін, після того як ти спробуєш їх зберігти тобі
          запропонує система авторизуватися на сайті. Якщо в тебе облікового
          запису немає, то це займе лише пару кліків. Після того ти побачиш, що
          біля назви проекта з'явився надпис (forked). Заміни слово forker на
          своє ім'я та прізвище, наприклад s.bandera, при цьому оновиться url
          сторінки/проекта, саме цей url після виконання завдання тобі необхідно
          буде передати для перевірки.
        </li>
        <li>Умови задачі видаляти непотрібно, працюй із секцією "Рішення"</li>
        <li>
          <Link to="/task1">Перейти до завдання</Link>
        </li>
      </ul>
    </Layout>
  );
}

export default Home;
