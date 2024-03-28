import usePutReaction from "../../../hooks/usePutReaction";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
import Like from "../../ui/Like/Like";
import Dislike from "../../ui/Dislike/Dislike";

import styles from "./MainPost.module.scss";

interface IMainPost {
  title: string;
  body: string;
  postId: number;
  reactions: {
    likes: number;
    dislikes: number;
    selfReaction: "like" | "dislike" | null;
  };
}

const MainPost = ({ title, body, postId, reactions }: IMainPost) => {
  const { addOneLike, addOneDislike } = usePutReaction();

  const addLike = () => {
    addOneLike(postId);
  };

  const addDislike = () => {
    addOneDislike(postId);
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
          <Link to={`/posts/${postId}`}>
            <Button text="Читать далее" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
