import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal"
import styles from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {isPosting &&
        <Modal onClose={onStopPosting}>
          <NewPost 
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      }
      <ul className={styles.posts}>
        <Post key={1} author={enteredAuthor} body={enteredBody} />
        <Post key={2} author="Carlos" body="Hey Ya" />
      </ul>
    </>
  );
}

export default PostsList;
