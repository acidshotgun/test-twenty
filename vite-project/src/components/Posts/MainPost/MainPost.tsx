import usePutReaction from "../../../hooks/usePutReaction";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
import Like from "../../ui/Like/Like";
import Dislike from "../../ui/Dislike/Dislike";

import styles from "./MainPost.module.scss";

import { IPost } from "../../../types/post";

const MainPost = ({ title, body, id, reactions }: IPost) => {
  const { addOneLike, addOneDislike } = usePutReaction();

  const addLike = () => {
    addOneLike(id);
  };

  const addDislike = () => {
    addOneDislike(id);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src="https://placehold.co/1400x600" alt="img" />
      </div>

      <div className={styles.descr}>
        <div className={styles.top}>
          <span className={styles.title}>{title}</span>
          <div className={styles.reactions}>
            <Like
              reaction={reactions?.selfReaction}
              count={reactions?.likes}
              addLike={addLike}
            />
            <Dislike
              reaction={reactions?.selfReaction}
              count={reactions?.dislikes}
              addDislike={addDislike}
            />
          </div>
        </div>
        <p className={styles.body}>{body}</p>
        <div className={styles.bot}>
          <Link to={`/posts/${id}`}>
            <Button text="Читать далее" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
