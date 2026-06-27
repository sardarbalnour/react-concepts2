import { useContext } from "react";
import { UserContext } from "../App";

function UserList() {
  const result = useContext(UserContext);
  console.log(result);

  return (
    <div>
      {result.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default UserList;
