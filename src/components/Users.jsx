import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const json = await res.json();
        setUsers(json);
        console.log(json)
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <input
        type="text"
        placeholder="Id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      {!users.length && !error && <h3>Loading...</h3>}
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
      {error && <h4>Something went wrong !</h4>}
    </div>
  );
}

export default Users;
