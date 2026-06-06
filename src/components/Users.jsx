import { useEffect, useState } from "react";
import Counter from "./Counter";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${id}`,
          { signal: controller.signal }
        );
        const json = await res.json();
        setUsers(json);
        console.log(json);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(true);
        }
      }
    };
    fetchData();

    return () => {
      controller.abort();
      console.log("ggf");
    };
  }, [id]);

  return (
    <div>
      {/* {id > 10 && <Counter />} */}
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
