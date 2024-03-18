import "./App.css";
import MainRoutes from "./Components/MainRoutess";
import Navbar from "./Components/Navbar";
import "./Styles/RootVariables.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
