import { createContext } from "react";

import UserPage from "./components/UserPage";

const users = [
  { id: 1, name: "sardar" },
  { id: 2, name: "ali" },
  { id: 3, name: "hama" },
];

const UserContext = createContext();

function App() {
  return (
    <>
      <UserPage />
    </>
  );
}

export default App;
