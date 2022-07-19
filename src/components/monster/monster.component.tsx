import { IMonster } from "../monsters/monsters.component";

import "./monster.styles.css";

interface IMonterProps {
  monster: IMonster;
}

const Monster = ({ monster }: IMonterProps) => {
  const { name, id, email } = monster;
  return (
    <div className="monster-container">
      <h2 className="title">{name}</h2>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={name}
      />
      <p className="email">{email}</p>
    </div>
  );
};

export default Monster;
