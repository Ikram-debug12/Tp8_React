import ArticleList from './FetchData';
import UserList from './AxiosData';

function App() {
  return (
    <div>
      <h1>TP — Récupération de données depuis une API avec React</h1>
      <ArticleList />
      <UserList />
    </div>
  );
}

export default App;