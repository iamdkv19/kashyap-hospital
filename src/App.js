import "./App.css";
import HomePage from "./page/home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/header";
import About from "./page/about";
import Contact from "./page/contact";
import Faq from "./page/faq";
import Gallery from "./page/gallery";
import Reviews from "./page/reviews";
import Treatment from "./page/treatment";
import "./App.css";
import Footer from "./components/layouts/footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route exact path="/treatment" element={<Treatment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
