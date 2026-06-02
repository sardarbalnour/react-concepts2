import { useEffect } from "react";

function Users() {
  useEffect(() => {
    console.log("first");
  }, []);
  return <div>Users</div>;
}

export default Users;
