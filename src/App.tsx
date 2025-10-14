import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      {/* Minimal SEO for React 19 — you can put per-page <title> too */}
      <title>Priyansh Sarvaiya - Portfolio</title>
      <meta name="description" content="Projects, skills, resume, and contact." />
      <meta property="og:title" content="Priyansh Sarvaiya - Portfolio" />
      <meta property="og:type" content="website" />
      {/* /SEO */}

      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Nav />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}