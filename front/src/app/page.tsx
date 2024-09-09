"use client";

import HeroSection from "../components/HeroSection";
import MatchCardOne from "../components/core/MatchCardOne";
import MatchCardTwo from "../components/core/MatchCardTwo";
import { useMatch } from "@/context/matchProvider";

const HomePage = () => {
  const { liveMatches, upcomingMatches } = useMatch();

  return (
    <main className="flex flex-col w-full items-center justify-center">
      <HeroSection />
      <section className="flex gap-8 -mt-16 relative w-full max-w-[1250px] justify-center">
        {liveMatches.map((liveMatch) => {
          return <MatchCardOne {...liveMatch} />;
        })}
      </section>
      <section className="max-w-[1250px] w-full mt-20">
        <p>Upcoming matches</p>
        {upcomingMatches.map((upcomingMatch) => {
          return <MatchCardTwo {...upcomingMatch} />;
        })}
      </section>
    </main>
  );
};

export default HomePage;
