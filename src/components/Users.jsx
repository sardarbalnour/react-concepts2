import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setUsers(json);
    };
    fetchData();
  }, []);

  return (
    <div>
      {!users.length && <h3>Loading...</h3>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
