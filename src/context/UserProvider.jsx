import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([
    { id: 1, name: "sardar" },
    { id: 2, name: "ali" },
    { id: 3, name: "hama" },
  ]);

  return (
    <div>
      <UserContext.Provider value={{ users, setUsers }}>
        {children}
      </UserContext.Provider>
    </div>
  );
}

export default UserProvider;
