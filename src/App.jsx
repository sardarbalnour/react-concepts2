import { createContext, useState } from "react";

import UserPage from "./components/UserPage";

export const UserContext = createContext();

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "sardar" },
    { id: 2, name: "ali" },
    { id: 3, name: "hama" },
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <UserPage />
    </UserContext.Provider>
  );
}

export default App;
