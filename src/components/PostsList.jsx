import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal"
import styles from './PostsList.module.css';
import { useState } from "react";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting &&
        <Modal onClose={onStopPosting}>
          <NewPost 
            onAddPost={addPostHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      }
      {posts.length > 0 &&
        <ul className={styles.posts}>
          {posts.map((post, index) => <Post key={index} post={post} />)}
        </ul>
      }
      {posts.length === 0 &&
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      }
    </>
  );
}

export default PostsList;
