import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from './PostsList.module.css';

function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost 
        onBodyChange={changeBodyHandler}
        onAuthorChange={changeAuthorHandler}
      />
      <ul className={styles.posts}>
        <Post key={1} author={enteredAuthor} body={enteredBody} />
        <Post key={2} author="Carlos" body="Hey Ya" />
      </ul>
    </>
  );
}

export default PostsList;
