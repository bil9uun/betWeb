"use client";
import Link from "next/link";

// components

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import { UserDropDown } from "./UserDropDown";
import { useUser } from "@/context/userProvider";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const { loggedUser, logout } = useUser();

  return (
    <header className="py-8 xl:py-12 text-white sticky top-0 l-0 z-10 bg-primary">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-accent flex flex-col font-extralight xl:flex-row xl:gap-3">
            Hello
            <span className="text-xl text-white font-semibold">
              {loggedUser ? loggedUser.name : "BetWeb"}
            </span>
          </h1>
        </Link>
        {/* Balance */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-xs">{loggedUser ? "Balance:" : ""}</p>
          <h1>{loggedUser ? loggedUser.balance : ""}</h1>
        </div>
        {/* desktop nav and hire button  */}
        <div className="hidden xl:flex items-center gap-8">
          {loggedUser ? (
            <div className="xl:flex items-center gap-8">
              <Nav />
              <UserDropDown logout={logout} loggedUser={loggedUser} />
            </div>
          ) : (
            <Button
              className="bg-accent text-black rounded-xl hover:text-white"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login/Signup
            </Button>
          )}
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav loggedUser={loggedUser} />
        </div>
      </div>
    </header>
  );
};

export default Header;
