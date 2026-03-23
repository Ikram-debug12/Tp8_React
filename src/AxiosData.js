
import { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [members, setMembers] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [requestError, setRequestError] = useState(null);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    setIsFetching(true);
    setRequestError(null);

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setMembers(res.data))
      .catch((err) => setRequestError(err.message))
      .finally(() => setIsFetching(false));
  }, [reload]);

  if (isFetching) return <p>Récupération des utilisateurs en cours...</p>;
  if (requestError) return <p>Une erreur est survenue : {requestError}</p>;

  return (
    <div>
      <h2>Liste des membres récupérés via Axios</h2>
      <button onClick={() => setReload(r => r + 1)}>Recharger les données</button>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.name} — {member.email} — {member.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;