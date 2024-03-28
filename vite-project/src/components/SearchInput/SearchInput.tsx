import { useState, useEffect } from "react";
import { fetchFilteredPost } from "../../redux/slices/posts";
import { useDispatch, useSelector } from "react-redux";

import styles from "./SearchInput.module.scss";
import ic_search from "./ic_search.svg";

const SearchInput = () => {
  const [value, setValue] = useState<string>("");
  const filteredPost = useSelector((state) => state.posts.filteredPost);
  const dispatch = useDispatch();

  const onWriteFilter = (value: string) => {
    setValue(value);
    dispatch(fetchFilteredPost(value));
  };

  useEffect(() => {
    if (filteredPost?.length > 0) {
      setValue(filteredPost[0].title);
    }
  }, []);

  return (
    <div className={styles.input}>
      <div className={styles.icon_input}>
        <img src={ic_search} alt="ic_search" />
      </div>
      <input
        type="text"
        placeholder="Поиск по названию статьи"
        value={value}
        onChange={({ target }) => onWriteFilter(target.value)}
      />
    </div>
  );
};

export default SearchInput;
