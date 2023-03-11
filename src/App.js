import { BrowserRouter ,  Route, Routes } from "react-router-dom"
import './App.css';
import Home from './scenes/home';
import About from './scenes/about';
import Contact from "./scenes/contact";
import Project from "./scenes/project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
