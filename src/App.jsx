import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigationbar from "./Navigationbar";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Nopage from "./Nopage";

function App() {
  return (
    <BrowserRouter>
      <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
