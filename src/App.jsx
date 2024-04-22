import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Header />

        <Routes>
          <Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}>
              {" "}
            </Route>
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
