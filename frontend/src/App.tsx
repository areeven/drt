import "./App.css";
import drtLogo from "./shared/images/drt-logo.png";

function App() {
  return (
    <div className="App">
      <div>
        <img
          src={drtLogo}
          alt="den rullande tärningen"
          width="900"
          height="auto"
          className="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
      </div>
    </div>
  );
}

export default App;
