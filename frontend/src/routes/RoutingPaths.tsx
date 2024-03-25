import { Routes, Route, Navigate } from "react-router-dom";
import { routingPaths } from "./RoutingPathUrl";
import HomeView from "../views/HomeView";
import RegisterView from "../views/unauthorized/RegisterView";
import NotFoundView from "../views/NotFoundView";
import UnauthorizedView from "../views/unauthorized/UnauthorizedView";
import LoginView from "../views/unauthorized/LoginView";
import ProfileView from "../views/authorized/ProfileView";
import SettingsView from "../views/authorized/SettingsView";
import AdminView from "../views/authorized/AdminView";
import UsersView from "../views/authorized/UsersView";

export const RoutingPaths: React.FC = () => {
  return (
    <Routes>
      <Route path={routingPaths.homeView} element={<HomeView />} />
      <Route path={routingPaths.registerView} element={<RegisterView />} />
      <Route path={routingPaths.loginView} element={<LoginView />} />
      <Route path={routingPaths.profileView} element={<ProfileView />} />
      <Route path={routingPaths.settingsView} element={<SettingsView />} />
      <Route path={routingPaths.wildCardView} element={<Navigate to="404" />} />
      <Route
        path={routingPaths.unauthorizedView}
        element={<UnauthorizedView />}
      />
      <Route path={routingPaths.notFoundView} element={<NotFoundView />} />
      <Route path={routingPaths.adminView} element={<AdminView />} />
      <Route path={routingPaths.usersView} element={<UsersView />} />
    </Routes>
  );
};
