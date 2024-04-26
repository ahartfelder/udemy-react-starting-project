import styles from './Post.module.css';

function Post(props) {
  const { author, message } = props.post;

  return (
    <div className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{message}</p>
    </div>
  );
}

export default Post;
