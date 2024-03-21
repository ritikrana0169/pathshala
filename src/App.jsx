import "./App.css";
import MainRoutes from "./Components/MainRoutess";
import Navbar from "./Components/Navbar";
import HamburgerMenu from "./Components/ReactHemburger";
import Footer from "./Pages/Footer";
import "./Styles/RootVariables.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HamburgerMenu /> */}
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
