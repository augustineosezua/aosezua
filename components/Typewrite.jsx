"use client";

import Typewriter from "typewriter-effect";

const TITLES = [
  "full-stack developer",
  "Computing student at Queen's",
  "developer who likes the details",
  "Spider-Man fan",
];

export default function TypeW() {
  return (
    <Typewriter
      options={{
        strings: TITLES,
        autoStart: true,
        loop: true,
        pauseFor: 2200,
      }}
    />
  );
}
