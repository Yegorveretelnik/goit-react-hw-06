import css from "./SearchBox.module.css";

function SearchBox({ filter, onFilter }) {
  return (
    <div>
      <input
        className={css.search}
        type="text"
        placeholder="Find contacts by name"
        value={filter}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
