export default function WeatherAdvice() {
  const isRainy = true;
  const isRainy1 = false;

return (
    <>
      <p>
        {isRainy
          ? "Возьмите зонт: сегодня возможен дождь."
          : "Зонт не понадобится: погода хорошая."}
      </p>

      <p>
        {isRainy1
          ? "Возьмите зонт: сегодня возможен дождь."
          : "Зонт не понадобится: погода хорошая."}
      </p>
    </>
  );
}
