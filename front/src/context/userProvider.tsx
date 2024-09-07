"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import myAxios from "@/utils/myAxios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface IUser {
  name?: string;
  email?: string;
  password?: string;
  avatarImage?: string;
  otp?: string;
  createdAt?: string;
  _id?: string;
}

interface IUserContext {
  users: IUser[];
  userToken: string | null;
  loggedUser?: IUser;
  logIn: ({ email, password }: ILogin) => void;
}

interface ILogin {
  email: string;
  password: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: PropsWithChildren<{}>) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [userToken, setUserToken] = useState<string | null>(null);
  const [loggedUser, setLoggedUser] = useState<IUser>();

  const router = useRouter();

  const isLogged = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserToken(token);
    }

    const user = JSON.parse(localStorage.getItem("user")!);
    if (user) {
      setLoggedUser(user);
    }
  };

  const getAllUsers = async () => {
    try {
      const {
        data: { users },
      } = await myAxios.get("/user/get");
      setUsers(users);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const logIn = async ({ email, password }: ILogin) => {
    try {
      const {
        data: { token, user },
      } = await myAxios.post("/auth/login", {
        userEmail: email,
        userPassword: password,
      });

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      setLoggedUser(user);
      setUserToken(token);

      router.push("/");
    } catch (error: any) {
      console.log("Error during login", error);
      toast.error(`Error: ${error?.response?.data?.message || ""}`);
    }
  };

  useEffect(() => {
    getAllUsers();
    isLogged();
  }, []);

  return (
    <UserContext.Provider value={{ users, userToken, loggedUser, logIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
