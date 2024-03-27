import http from "../drtApi";
import { User, UserDataObject } from "../../utils/interface/Interface";

const usersUrl = "/users";

const UserService = {
  createUser: (newUserPayload: User) => {
    return http.post(usersUrl, newUserPayload);
  },

  getAllUsers: () => {
    return http.get<UserDataObject[]>(usersUrl);
  },
};

export default UserService;
