import { useSelector } from "react-redux";
import MainPost from "../MainPost/MainPost";
import Post from "../Post/Post";

import styles from "./PostLayout.module.scss";

const PostLayout = () => {
  const posts = useSelector((state) => state.posts.posts);
  const filteredPost = useSelector((state) => state.posts.filteredPost);

  const mainPost = posts?.[0];
  const leftColumn = posts?.filter((item, i) => i !== 0 && item.id % 2 == 0);
  const rightColumn = posts?.filter((item, i) => i !== 0 && item.id % 2 !== 0);

  return (
    <div className={styles.container}>
      {filteredPost.length > 0 ? (
        <MainPost
          body={filteredPost[0].body}
          postId={filteredPost[0].id}
          title={filteredPost[0].title}
          reactions={posts?.[filteredPost[0]?.id - 1].reactions}
        />
      ) : (
        mainPost && (
          <>
            <MainPost
              body={mainPost.body}
              postId={mainPost.id}
              title={mainPost.title}
              reactions={mainPost.reactions}
            />
            <div className={styles.columns}>
              <ul className={styles.column}>
                {leftColumn?.map((post) => {
                  return (
                    <Post
                      title={post.title}
                      key={post.id}
                      reactions={post.reactions}
                      postId={post.id}
                    />
                  );
                })}
              </ul>
              <ul className={styles.column}>
                {rightColumn?.map((post) => {
                  return (
                    <Post
                      title={post.title}
                      key={post.id}
                      reactions={post.reactions}
                      postId={post.id}
                    />
                  );
                })}
              </ul>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default PostLayout;
