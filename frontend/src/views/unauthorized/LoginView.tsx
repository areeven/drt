import { useState } from "react";
import { AuthenticatedUser } from "../../utils/interface/Interface";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../utils/global/provider/UserProviderOrg";
import http from "../../api/drtApi";
import { routingPaths } from "../../routes/RoutingPathUrl";

function LoginView() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setAuthenticatedUser } = useUserContext();

  const verifyUser = () => {
    const payload: AuthenticatedUser = {
      email: email,
      password: password,
    };
    console.log(payload);
    http
      .post(`/verifyUser`, payload)
      .then((response: any) => {
        console.log(response.data.message);
        login(response.data.message);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const login = (apiResponse: boolean) => {
    if (apiResponse) {
      setAuthenticatedUser(email);
      localStorage.setItem("email", email);
      navigate(routingPaths.homeView);
    }
  };

  return (
    <div>
      <div>
        <h1>Sign in</h1>
      </div>
      <div>
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={() => verifyUser()}>Log In</button>
      </div>
    </div>
  );
}

export default LoginView;
