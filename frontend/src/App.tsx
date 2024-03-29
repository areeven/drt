import { BrowserRouter } from "react-router-dom";
import React, { Suspense, useState } from "react";
import "./App.css";
import { RoutingPaths } from "./routes/RoutingPaths";
import NavBar from "./components/navigation/NavBar";
import Loading from "./views/Loading";
import { UserContext } from "./utils/global/provider/UserProviderOrg";

const App: React.FC = (): JSX.Element => {
  const [authenticatedUser, setAuthenticatedUser] = useState<string>("");

  const isUserAuthorized = () => {
    const email = localStorage.getItem("email");
    const admin = localStorage.getItem("admin");
    if (typeof email === "string" && admin) {
      setAuthenticatedUser(email);
    }
  };

  React.useEffect(() => {
    isUserAuthorized();
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <div className="App">
        <UserContext.Provider
          value={{ authenticatedUser, setAuthenticatedUser }}
        >
          <BrowserRouter>
            <NavBar />
            <RoutingPaths />
          </BrowserRouter>
        </UserContext.Provider>
      </div>
    </Suspense>
  );
};

export default App;
