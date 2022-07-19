import "./App.css";
import { ChangeEvent, useState } from "react";
import Mosnters from "./components/monsters/monsters.component";
import Search from "./components/search/search.component";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value.toLowerCase());
  };
  return (
    <main className="App">
      <h1>Monster Robos</h1>
      <Search
        onChange={searchHandler}
        value={searchValue}
        placeholder="Search for Monster"
      />
      <Mosnters searchValue={searchValue} />
    </main>
  );
}

export default App;
