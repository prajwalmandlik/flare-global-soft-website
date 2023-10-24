import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Intership from "./components/internship/Intership";
import Services from "./components/services/Services";
import TermsAndConditions from "./components/termsAndConditions/TermsAndConditions";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/TermsAndCondition" element={<TermsAndConditions />} />
          <Route path="/Internship" element={<Intership />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
