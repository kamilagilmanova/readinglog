interface SpaceMission {
  id: number;
  name: string;
  planet: string;
  status: string;
}

const missions: SpaceMission[] = [
  { id: 1, name: "Красный горизонт", planet: "Марс", status: "В пути" },
  { id: 2, name: "Ледяной спутник", planet: "Юпитер", status: "Запланирована" },
  { id: 3, name: "Венера-Экспресс", planet: "Венера", status: "Завершена" },
  { id: 4, name: "Титан-1", planet: "Сатурн", status: "В пути" },
];

export default function SpaceMissions() {
  return (
    <section>
      <h2>Космические миссии</h2>
      <div>
        {missions.map((mission) => (
          <div key={mission.id}>
            <h3>{mission.name}</h3>
            <p>Планета: {mission.planet}</p>
            <p>Статус: {mission.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
