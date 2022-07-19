import { useState, useEffect } from "react";
import Monster from "../monster/monster.component";

export interface IMonster {
  name: string;
  id: number;
  email: string;
}

const Mosnters = () => {
  const [monsters, setMonsters] = useState<IMonster[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  return (
    <div>
      {monsters.map((monster) => (
        <Monster monster={monster} key={monster.id} />
      ))}
    </div>
  );
};

export default Mosnters;
