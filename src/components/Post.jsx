import styles from './Post.module.css';

function Post({post}) {
  const { author, body } = post;
  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
    </li>
  );
}

export default Post;
