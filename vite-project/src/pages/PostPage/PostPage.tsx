import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import usePutReaction from "../../hooks/usePutReaction";

import Like from "../../components/ui/Like/Like";
import Dislike from "../../components/ui/Dislike/Dislike";

import back from "../../components/ui/icons/keyboard_backspace.svg";
import styles from "./PostPage.module.scss";

const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const postReactions = useSelector(
    (state) =>
      state.posts.posts?.find((postItem) => postItem.id === post?.id)?.reactions
  );
  const { addOneLike, addOneDislike } = usePutReaction();

  const addLike = () => {
    addOneLike(postId);
  };

  const addDislike = () => {
    addOneDislike(postId);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [postId]);

  return (
    <div className={styles.post_page}>
      {post !== null ? (
        <>
          <div className={styles.info}>
            <>
              <div className={styles.navigation} onClick={() => navigate(-1)}>
                <img src={back} alt="back" />
                <span>Вернуться к статьям</span>
              </div>
            </>

            <div className={styles.reactions}>
              <div className={styles.reaction}>
                <Like
                  reaction={postReactions?.selfReaction}
                  count={postReactions?.likes}
                  addLike={addLike}
                />
              </div>
              <div className={styles.reaction}>
                <Dislike
                  reaction={postReactions?.selfReaction}
                  count={postReactions?.dislikes}
                  addDislike={addDislike}
                />
              </div>
            </div>
          </div>

          <div className={styles.post}>
            <div className={styles.title}>{post.title}</div>

            <div className={styles.content}>
              <div className={styles.image}>
                <img src={"https://placehold.co/848x477"} alt="img" />
              </div>
              <div className={styles.body}>{post.body}</div>
            </div>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default PostPage;
