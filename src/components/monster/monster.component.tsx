import { IMonster } from "../monsters/monsters.component";

interface IMonterProps {
  monster: IMonster;
}

const Monster = ({ monster }: IMonterProps) => {
  const { name, id, email } = monster;
  return (
    <div className="monster-container">
      <h2>{name}</h2>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={name}
      />
      <p>{email}</p>
    </div>
  );
};

export default Monster;
