import { Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import AboutUsPage from "./pages/AboutUsPage";
import PageNotFound from "./pages/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="courses" element={<CoursePage />} />
      <Route path="about-us" element={<AboutUsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
