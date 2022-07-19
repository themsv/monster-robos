import { ChangeEvent, useState } from "react";
import "./search.styles.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };
  return (
    <section>
      <input
        type="search"
        value={searchValue}
        onChange={searchHandler}
        placeholder="Search for Monster"
      />
    </section>
  );
};

export default Search;
