"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

//comp

import myAxios from "@/utils/myAxios";
import { ILogin, IUser, IUserContext } from "@/interface";

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

  const sortByDateDesc = (data: IUser[]) => {
    return data.sort((a: IUser, b: IUser) => b.balance! - a.balance!);
  };

  const getAllUsers = async () => {
    try {
      const {
        data: { users },
      } = await myAxios.get("/user/get");
      setUsers(sortByDateDesc(users));
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

  const signUp = async ({ email, name, password }: ILogin) => {
    try {
      const {
        data: { user },
      } = await myAxios.post("/auth/signup", {
        userEmail: email,
        userName: name,
        userPassword: password,
      });
      toast.success("Sign up successfully");
      router.push("/login");
    } catch (error: any) {
      console.log("Error during signUp", error);
      toast.error(`Error: ${error?.response?.data?.message || ""}`);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  // const checkUser = () => {
  //   if (!loggedUser) {
  //     router.push("/");
  //   }
  // };
  // useEffect(() => {
  //   checkUser();
  // }, [loggedUser]);

  useEffect(() => {
    getAllUsers();
    isLogged();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        userToken,
        loggedUser,
        logIn,
        logout,
        signUp,
        setLoggedUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
