import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Portofolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/aboutUS" element={<About />} />
      <Route path="/portfolio" element={<Portofolio />} />
      <Route path="/blog_details" element={<BlogDetails />} />
    </Routes>
  );
}
