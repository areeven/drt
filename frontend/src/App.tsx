import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import { RoutingPaths } from "./routes/RoutingPaths";
import NavBar from "./components/navigation/NavBar";
import { UserContext } from "./utils/global/provider/UserProviderOrg";

const App: React.FC = (): JSX.Element => {
  const [authenticatedUser, setAuthenticatedUser] = useState<string>("");

  const isUserAuthorized = () => {
    const email = localStorage.getItem("email");
    if (typeof email === "string") {
      setAuthenticatedUser(email);
    }
  };

  React.useEffect(() => {
    isUserAuthorized();
  }, []);
  return (
    <div className="App">
      <UserContext.Provider value={{ authenticatedUser, setAuthenticatedUser }}>
        <BrowserRouter>
          <NavBar />
          <RoutingPaths />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
};

export default App;
