import { Link, Outlet } from "react-router";
import NavBar from "../components/NavBar";

function AboutUsPage() {
  return (
    <div>
      <NavBar />
      <h1>About Us</h1>
      <Outlet />
      <ul>
        <li>
          <Link to="programmers">Programmers</Link>
        </li>
        <li>
          <Link to="users">Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default AboutUsPage;
