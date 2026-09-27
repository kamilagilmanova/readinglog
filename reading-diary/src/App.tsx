import "./App.css";
import WeatherAdvice from "./components/WeatherAdvice";
import WorkshopCard from "./components/WorkshopCard";

function App() {
  const pageTitle = "Читательский дневник";
  const pageSubtitle = "Мои прочитанные и планируемые книги";
  const totalBook = 3;
  const readingBook = 1;
  const completedBook = 1;

  const plannedBook = totalBook - readingBook - completedBook;

  return (
    <main className="page">
      <WeatherAdvice />
      <WorkshopCard />
      <header className="page__header">
        <h1 className="page__title">{pageTitle}</h1>
        <p className="page__descr">{pageSubtitle}</p>
      </header>
      <section className="states">
        <h2 className="stats__title">Статистика</h2>
        <div className="stats__list">
          <div className="stats__item">
            <p>Всего книг: {totalBook}</p>
          </div>
          <div className="stats__item">
            <p>Читаю сейчас: {readingBook}</p>
          </div>
          <div className="stats__item">
            <p>Планирую: {plannedBook}</p>
          </div>
          <div className="stats__item">
            <p>Закончено: {completedBook}</p>
          </div>
        </div>
      </section>
      <section className="books">
        <h2 className="books__title">Мои книги</h2>
        <ul className="books__list">
          <li className="books__item">
            <h3 className="books__name">1984</h3>
            <p className="books__author">Джордж Оруэлл</p>
            <p className="books__status">Читаю</p>
          </li>
          <li className="books__item">
            <h3 className="books__name">Отцы и Дети</h3>
            <p className="books__author">Иван Тургенев</p>
            <p className="books__status">Читаю</p>
          </li>
          <li className="books__item">
            <h3 className="books__name">Гроза</h3>
            <p className="books__author">.</p>
            <p className="books__status">Прочитано</p>
          </li>
        </ul>
      </section>
      <section className="new-book">
        <h2>Добавить книгу</h2>

        <form className="book-form">
          <div className="book-form__field">
            <label htmlFor="book-title">Название книги</label>
            <input type="text" id="book-title" />
          </div>

          <div className="book-form__field">
            <label htmlFor="book-author">Автор</label>
            <input type="text" id="book-author" />
          </div>

          <div className="book-form__field">
            <label htmlFor="book-status">Статус</label>
            <select id="book-status">
              <option value="want">Хочу прочитать</option>
              <option value="reading">Читаю сейчас</option>
              <option value="done">Прочитано</option>
            </select>
          </div>

          <button type="submit">Добавить книгу</button>
        </form>
      </section>
    </main>
  );
}

export default App;
