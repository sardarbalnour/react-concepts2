import { createContext } from "react";

import UserPage from "./components/UserPage";

const users = [
  { id: 1, name: "sardar" },
  { id: 2, name: "ali" },
  { id: 3, name: "hama" },
];

export const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value={users}>
      <UserPage />
    </UserContext.Provider>
  );
}

export default App;
