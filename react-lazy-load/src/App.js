import './App.css';
import { Posts } from './Posts';
import { LoadingPosts } from './LoadingPosts';
import Header from './Header';

function App() {
  return (
    <div className="container p-4">
        <Header/>
        <LoadingPosts />
        <Posts />
    </div>
  );
}

export default App;
