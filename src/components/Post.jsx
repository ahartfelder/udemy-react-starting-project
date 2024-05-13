import { Link } from 'react-router-dom';
import styles from './Post.module.css';

function Post({post}) {
  const { id, author, body } = post;
  return (
    <li className={styles.post}>
      <Link to={id}>
        <p className={styles.author}>{author}</p>
        <p className={styles.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
