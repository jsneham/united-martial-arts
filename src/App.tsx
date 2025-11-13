import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.js";
import Home from "./pages/Home.js";
import Classes from "./pages/Classes.js";
import { Gallery } from "./pages/Gallery.js";
import { Contact } from "./pages/Contact.js";
import { Instructor } from "./pages/Instructor.js";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/instructors" element={<Instructor />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
