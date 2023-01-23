import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Info from "./components/Info";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <section className="header-nav">
          <Header />
          <Nav />
        </section>
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Info />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <p className="bottom"></p>
      </div>
    </BrowserRouter>
  );
}

export default App;
