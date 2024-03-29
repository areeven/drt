import { createContext, useContext } from "react";

export type AuthenticatedContent = {
  authenticatedUser: string;
  setAuthenticatedUser: (email: string) => void;
};

export const UserContext = createContext<AuthenticatedContent>({
  authenticatedUser: "",
  setAuthenticatedUser: () => {},
});

export const useUserContext = () => useContext(UserContext);
