import { BrowserRouter ,  Route, Routes } from "react-router-dom"
import './App.css';
import Home from './scenes/home';
import About from './scenes/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
