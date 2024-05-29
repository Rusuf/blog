import Home from "./components/pages/Home";
import "./App.css";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Navbar from "./components/inc/Navbar";
import {BrowserRouter,Routes, Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
     <Navbar />
    <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
     </BrowserRouter>
  );
}
    
export default App;
