import React, { useMemo, useState } from "react";
import { styled } from "styled-components";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

import Layout from "./Layout";

const StyledWrapper = styled.div``;

const data = [
  {
    id: 1,
    name: "Apple juice",
    category: "drinks",
    amount: 41.2,
  },
  {
    id: 2,
    name: "Dark cholocate",
    category: "sweets",
    amount: 78.0,
  },
  {
    id: 3,
    name: "Tomato juice",
    category: "drinks",
    amount: 38.4,
  },
  {
    id: 4,
    name: "Potato",
    category: "vegetables",
    amount: 7.5,
  },
  {
    id: 5,
    name: "Carrot",
    category: "vegetables",
    amount: 30.65,
  },
  {
    id: 6,
    name: "Cookies ABK",
    category: "sweets",
    amount: 38.4,
  },
  {
    id: 7,
    name: "Candy ABK",
    category: "sweets",
    amount: 170.5,
  },
  {
    id: 1,
    name: "Apple juice",
    category: "drinks",
    amount: 41.2,
  },
  {
    id: 8,
    name: "Water Morshinskaya, non-carbotated",
    category: "drinks",
    amount: 16.25,
  },
  {
    id: 9,
    name: "Apple pie",
    category: "sweets",
    amount: 78.0,
  },
  {
    id: 7,
    name: "Candy ABK",
    category: "sweets",
    amount: 170.5,
  },
];

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function Task1() {
  const [filters, setFilters] = useState({
    priceFilter: "",
    categoryFilter: "",
  });
  const [sort, setSort] = useState("default");

  const uniqProducts = useMemo(() => {
    let modifyList = [...new Map(data.map((item) => [item.id, item])).values()];

    if (filters.categoryFilter || filters.priceFilter) {
      modifyList = modifyList.filter(({ amount, category }) => {
        if (
          !Number.isNaN(Number(filters.priceFilter)) &&
          !Number.isNaN(Number(amount))
        ) {
          return (
            Number(filters.priceFilter) < Number(amount) &&
            category.includes(filters.categoryFilter.toString())
          );
        }

        return category.includes(filters.categoryFilter.toString());
      });
    }

    switch (sort) {
      case "DESC":
        modifyList.sort(
          ({ amount: aAmount }, { amount: bAmount }) => bAmount - aAmount
        );
        break;
      case "ASC":
        modifyList.sort(
          ({ amount: aAmount }, { amount: bAmount }) => aAmount - bAmount
        );
        break;
      case "default":
      default:
        break;
    }

    return modifyList;
  }, [sort, filters.categoryFilter, filters.priceFilter]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "sort") {
      debounce(setSort(value), 3000);
    } else {
      debounce(
        setFilters((prevState) => ({
          ...prevState,
          [name]: value,
        })),
        3000
      );
    }
  };

  return (
    <Layout>
      <div>
        <h1>Завдання:</h1>
        Маємо масив data, котрий містить <b>список проданих товарів</b> за
        останній місяць.
        <pre>
          <code className="javascript">
            {`
            const data = [
              {
                id: 1,
                name: "Apple juice",
                category: "drinks",
                amount: 41.2,
              },
              {
                id: 2,
                name: "Dark cholocate",
                category: "sweets",
                amount: 78.0,
              },
              {
                id: 3,
                name: "Tomato juice",
                category: "drinks",
                amount: 38.4,
              },
              {
                id: 4,
                name: "Potato",
                category: "vegetables",
                amount: 7.5,
              },
              {
                id: 5,
                name: "Carrot",
                category: "vegetables",
                amount: 30.65,
              },
              {
                id: 6,
                name: "Cookies ABK",
                category: "sweets",
                amount: 38.4,
              },
              {
                id: 7,
                name: "Candy ABK",
                category: "sweets",
                amount: 170.5,
              },
              {
                id: 1,
                name: "Apple juice",
                category: "drinks",
                amount: 41.2,
              },
              {
                id: 8,
                name: "Water Morshinskaya, non-carbotated",
                category: "drinks",
                amount: 16.25,
              },
              {
                id: 9,
                name: "Apple pie",
                category: "sweets",
                amount: 78.0,
              },
              {
                id: 7,
                name: "Candy ABK",
                category: "sweets",
                amount: 170.5,
              },
            ];
            `}
          </code>
        </pre>
        <br />
        Додайте на сторінку 3 елемента форми (контрол елементи):
        <ul>
          <li>
            перший має фільтрувати масив data по умові "вартість товару від";
          </li>
          <li>
            другий має фільтрувати масив data по умові "категорія товару";
          </li>
          <li>
            третій має сортувати масив data по умовам "без сортування" (дефолт),
            "вартість товару від меншого до більшого", "вартість товару від
            більшого до меншого";
          </li>
        </ul>
        <br />
        Необхідно вивести <b>каталог товарів</b> - список data{" "}
        <b>без повторень</b> елементів масиву у вигляді таблиці із стовпчиками -
        назва товара, категорія, вартість. Він має бути <b>відфільтрований</b>{" "}
        та <b>відсортований</b> в залежності від встановлених значень в контрол
        елементах. Всі фільтри працюють як "AND". Фільтрація/сортування
        відбувається в той момент, коли користувач закінчує працювати з якимось
        елементом форми.
        <br />
        Перший товар, який підходить під умови фільтрації і продавався
        найбільше, завжди розміщується на першому місці списку незалежно від
        типу сортування.
        <br />
        Додавання та видалення елементів списку проданих товарів при розробці чи
        прийнятті завдання не повино впливати на працездатніть коду.
        <br />
        Після того, як умови задачі тобі будуть зрозумілі, зафіксуй свою оцінку
        на виконання завдання.
      </div>
      <hr />
      <StyledWrapper>
        <h1>Рішення:</h1>
        <form onChange={onChangeHandler}>
          <input
            name="priceFilter"
            type="number"
            placeholder="Price from"
            min={Math.min(
              ...data.map(({ amount }) => amount)
            ).toString()}
            max={Math.max(
              ...data.map(({ amount }) => amount)
            ).toString()}
          />
          <input name="categoryFilter" type="text" placeholder="Category" />
          <div>
            <label>
              <input
                type="radio"
                name="sort"
                value="default"
                defaultChecked={sort === "default"}
              />
              <span>Without sort</span>
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                value="ASC"
                defaultChecked={sort === "ASC"}
              />
              <span>Sort by ASC</span>
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                value="DESC"
                defaultChecked={sort === "DESC"}
              />
              <span>Sort by desc</span>
            </label>
          </div>
        </form>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {uniqProducts.map(({ amount, category, name, id }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{category}</td>
                  <td>{amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <b>Оцінка: 1h</b>
        </div>
        <div>
          <b>Витрачений час:</b>
        </div>
      </StyledWrapper>
    </Layout>
  );
}

export default Task1;
