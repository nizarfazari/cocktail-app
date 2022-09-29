import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details, Footers, Navbar } from "./component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <section className="section-content">
          <Routes>
            <Route path="/category/:cat" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Details />} />
          </Routes>
        </section>
        <Footers />
      </BrowserRouter>
    </div>
  );
}

export default App;
