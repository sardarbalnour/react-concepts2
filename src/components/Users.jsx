import { useEffect } from "react";

function Users() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return <div>Users</div>;
}

export default Users;
