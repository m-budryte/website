import { Parallax } from "react-parallax";
import "./App.css";
import Footer from "./pageSections/footer";
import NavBar from "./pageSections/navBar";
import MainPage from "./websiteSections/MainPage/mainPage";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainPage/>
      <Footer/>
    </div>
  )}

export default App;
