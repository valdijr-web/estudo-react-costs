import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Container from "./components/layout/Container";

import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Newproject from "./components/pages/Newproject";

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'

function App() {

  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route
          path="/"
          element={
            <Container customClass="min-height">
              <Home />
            </Container>
          }
        />
        <Route
          path="/contact"
          element={
            <Container customClass="min-height">
              <Contact />
            </Container>
          }
        />
        <Route
          path="/company"
          element={
            <Container customClass="min-height">
              <Company />
            </Container>
          }
        />
        <Route
          path="/newproject"
          element={
            <Container customClass="min-height">
              <Newproject />
            </Container>
          }
        />
      </Routes>
      <Footer/>
      
    </Router>
    
  );
}

export default App;
