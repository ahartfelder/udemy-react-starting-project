const names = [{ name: 'Andreas', message: 'React.js is awesome' }, { name: 'Mônika', message: 'I like to sell' }];

function Post() {
  const choosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>{choosenName.name}</p>
      <p>{choosenName.message}</p>
    </div>
  );
}

export default Post;
