import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { RoutingPaths } from "./routes/RoutingPaths";
import NavBar from "./components/navigation/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutingPaths />
      </BrowserRouter>
    </div>
  );
}

export default App;
