import "./App.css";
import HomePage from "./page/home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/header";
import About from "./page/about";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<HomePage />} />
        <Route exact path='/faq' element={<HomePage />} />
        <Route exact path='/gallery' element={<HomePage />} />
        <Route exact path='/reviews' element={<HomePage />} />
        <Route exact path='/treatment' element={<HomePage />} />
        
      </Routes>
    </div>
  );
}

export default App;
