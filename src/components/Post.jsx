function Post(props) {
  console.log(props)
  const { author, message } = props.post;

  return (
    <div>
      <p>{author}</p>
      <p>{message}</p>
    </div>
  );
}

export default Post;
