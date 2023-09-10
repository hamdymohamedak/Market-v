import "./App.css";
import Home from "./Home";
import NavBar from "./component/NavBar";
import Clothes from "./component/Clothes";
import MobileApp from "./component/MobileApp";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Form from "./component/Form";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/contact" element={<MobileApp />} />
        <Route path="/addFormClothesAdminPage" element={<Form />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
