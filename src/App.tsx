import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.js";
import Home from "./pages/Home.js";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/classes" element={<Classes />} />
          <Route path="/gallery" element={<Gallery />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
