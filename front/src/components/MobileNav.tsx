"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

//comp

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { UserDropDown } from "./UserDropDown";
import { useUser } from "@/context/userProvider";
import { Button } from "./ui/button";
import { IUser } from "@/interface";

const MobileNav = ({ loggedUser }: { loggedUser: IUser | undefined }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useUser();

  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "Tournaments",
      path: "/tournaments",
    },
    {
      name: "Bets",
      path: `/bets/${loggedUser?._id}`,
    },
    {
      name: "Scoreboard",
      path: `/scoreboard`,
    },
  ];
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <div className="flex items-center justify-center">
            {loggedUser ? (
              <UserDropDown logout={logout} loggedUser={loggedUser} />
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
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
