import Post from './components/Post';

const posts = [
  {
    author: "Andreas", 
    message: "React.js is awesome!"
  },
  {
    author: "Mônika", 
    message: "I'm good at convincing people!"
  }
];

function App() {
  return (
    <main>
      {posts.map((post) => <Post post={post} />)}
    </main>
  );
}

export default App;
