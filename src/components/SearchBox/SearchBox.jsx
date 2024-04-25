import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  function handleInput(event) {
    dispatch(changeFilter(event.target.value));
  }

  return (
    <label className={css.labelSearch}>
      <span>Find contacts by name</span>
      <input
        type="text"
        value={filter}
        onChange={handleInput}
        className={css.inputSearch}
        placeholder="Enter a name to search for"
      />
    </label>
  );
};

export default SearchBox;
