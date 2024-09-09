"use client";

//comp

import User from "@/components/core/User";
import { useUser } from "@/context/userProvider";

const Scoreboard = () => {
  const { users } = useUser();
  return (
    <main>
      {users.map((user, index) => (
        <User
          imageUrl={user.avatarImage}
          name={user.name}
          email={user.email}
          balance={user.balance}
          index={index}
        />
      ))}
    </main>
  );
};

export default Scoreboard;
