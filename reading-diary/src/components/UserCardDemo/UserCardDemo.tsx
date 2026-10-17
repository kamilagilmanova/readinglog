import { useState } from "react";

export type UserRole = "student" | "teacher";

export function UserCardDemo() {
  const [name, setName] = useState<string | undefined>(undefined);
  const [role, setRole] = useState<UserRole>("student");

  return (
    <section>
      <h2>Редактирование профиля</h2>

      <label>
        Имя
        <input
          type="text"
          value={name ?? ""}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </label>

      <label>
        Роль
        <select
          value={role}
          onChange={(event) => {
            setRole(event.target.value as UserRole);
          }}
        >
          <option value="student">Студент</option>
          <option value="teacher">Преподаватель</option>
        </select>
      </label>

      <div>
        <h3>Карточка пользователя</h3>
        <p>Имя: {name?.trim() ? name : "Не указано"}</p>
        <p>Роль: {role === "student" ? "Студент" : "Преподаватель"}</p>
      </div>
    </section>
  );
}