import { Link } from "react-router-dom";
import Like from "../../ui/Like/Like";
import Dislike from "../../ui/Dislike/Dislike";
import Button from "../../ui/Button/Button";
import usePutReaction from "../../../hooks/usePutReaction";

import styles from "./Post.module.scss";

interface IPost {
  title: string;
  reactions: {
    likes: number;
    dislikes: number;
    selfReaction: "like" | "dislike" | null;
  };
  postId: number;
}

const Post = ({ title, reactions, postId }: IPost) => {
  const { addOneLike, addOneDislike } = usePutReaction();

  const addLike = () => {
    addOneLike(postId);
  };

  const addDislike = () => {
    addOneDislike(postId);
  };

  return (
    <li className={styles.wrapper}>
      <div className={styles.image}>
        <img src="https://placehold.co/558x273" alt="img" />
      </div>
      <div className={styles.descr}>
        <span className={styles.title}>{title}</span>
        <div className={styles.more}>
          <div className={styles.reactions}>
            <Like
              reaction={reactions.selfReaction}
              count={reactions?.likes}
              addLike={addLike}
            />
            <Dislike
              reaction={reactions.selfReaction}
              count={reactions?.dislikes}
              addDislike={addDislike}
            />
          </div>
          <Link to={`/posts/${postId}`}>
            <Button text="Читать далее" />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Post;
