import "./search.styles.css";

const Search = ({ ...props }) => {
  return (
    <section className="search-container">
      <input type="search" {...props} />
    </section>
  );
};

export default Search;
