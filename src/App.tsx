import "./App.css";
import { ChangeEvent, useEffect, useState } from "react";
import Mosnters from "./components/monsters/monsters.component";
import Search from "./components/search/search.component";
import { getJoke } from "../src/utils/data";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [joke, setJoke] = useState("");
  const searchHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const getLatestJoke = async () => {
      const { joke } = await getJoke();
      setJoke(joke);
    };
    getLatestJoke();
  }, [searchValue]);
  return (
    <main className="App">
      <h1>Monster Robos</h1>
      <h3 className="joke">&#128516;{joke}d&#128514;</h3>
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
