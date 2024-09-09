"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

//comp

import { useUser } from "@/context/userProvider";

const Nav = () => {
  const pathname = usePathname();

  const { loggedUser } = useUser();
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
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
