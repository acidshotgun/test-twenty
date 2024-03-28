import SearchInput from "../../components/SearchInput/SearchInput";
import PostLayout from "../../components/Posts/PostLayout/PostLayout";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.main_page}>
      <header>
        <h1>Блог</h1>
      </header>
      <p className={styles.subheader}>
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи
      </p>
      <SearchInput />
      <PostLayout />
    </div>
  );
};

export default MainPage;
