"use client";

import Typewriter from "typewriter-effect";

function TypeW() {
  const strings = [
    "Full Stack Developer",
    "Computing Student at Queen's University",
    "Curious Learner",
    "Problem Solver",
    "Creative Coder",
    "Tech Enthusiast",
    "Innovative Builder",
    "Team Player",
    "UI/UX Explorer",
    "Resilient Developer",
    "Driven Creator",
    "Spiderman Fan",
  ];

  const randomStrings = strings.sort(() => 0.5 - Math.random()).slice(0, 6);
  return (
    <Typewriter
      options={{
        strings: randomStrings,
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default TypeW;
