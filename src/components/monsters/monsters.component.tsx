import { useState, useEffect } from "react";
import Monster from "../monster/monster.component";

import "./monsters.styles.css";

export interface IMonster {
  name: string;
  id: number;
  email: string;
}

type MonstersProps = {
  searchValue: string;
};

const Mosnters = ({ searchValue }: MonstersProps) => {
  const [monsters, setMonsters] = useState<IMonster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  useEffect(() => {
    const newMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchValue)
    );
    setFilteredMonsters(newMonsters);
    console.log(newMonsters);
  }, [searchValue, monsters]);

  return (
    <div className="monsters-container">
      {filteredMonsters.map((monster) => (
        <Monster monster={monster} key={monster.id} />
      ))}
    </div>
  );
};

export default Mosnters;
