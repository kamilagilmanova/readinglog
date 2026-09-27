import "./App.css";
import WeatherAdvice from "./components/WeatherAdvice";
import WorkshopCard from "./components/WorkshopCard"

function App() {
  const pageTitle = "Читательский дневник";
  const pageSubtitle = "Мои прочитанные и планируемые книги";
  const totalBook = 3;
  const readingBook = 1;
  const completedBook = 1;

  const plannedBook = totalBook - readingBook - completedBook;

  return (
    <main className="page">
      <WeatherAdvice/>
      <WorkshopCard/>
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
    </main>
  );
}

export default App;
