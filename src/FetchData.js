import { useState, useEffect } from 'react';

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setFetchError(null);

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Problème lors de la récupération des données');
        }
        return res.json();
      })
      .then((data) => setArticles(data))
      .catch((err) => setFetchError(err.message))
      .finally(() => setIsLoading(false));
  }, [reload]);

  if (isLoading) return <p>Récupération des articles...</p>;
  if (fetchError) return <p>Une erreur est survenue : {fetchError}</p>;

  return (
    <div>
      <h2>Liste des articles récupérés</h2>
      <button onClick={() => setReload(r => r + 1)}>Recharger les données</button>
      <ul>
        {articles.slice(0, 10).map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;