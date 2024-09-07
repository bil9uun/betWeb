import React from "react";
import HeroSection from "../components/home/HeroSection";
import MatchCardOne from "../components/core/MatchCardOne";
import MatchCardTwo from "../components/core/MatchCardTwo";

const HomePage = () => {
  const mockProps = {
    time: "19:30",
    date: "Sep 07",
    team1name: "The Mongolz",
    team2name: "Team spirit",
    team1odds: 0.4,
    team2odds: 2.1,
  };
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <HeroSection />
      <section className="flex gap-8 -mt-16 relative w-full max-w-[1250px] justify-center">
        <MatchCardOne {...mockProps} />
        <MatchCardOne {...mockProps} />
        <MatchCardOne {...mockProps} />
        <MatchCardOne {...mockProps} />
      </section>
      <section className="max-w-[1250px] w-full mt-10">
        <p>Upcoming matches</p>
        <MatchCardTwo {...mockProps} />
        <MatchCardTwo {...mockProps} />
        <MatchCardTwo {...mockProps} />
        <MatchCardTwo {...mockProps} />
      </section>
    </main>
  );
};

export default HomePage;
