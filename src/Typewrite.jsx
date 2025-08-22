import Typewriter from 'typewriter-effect';

function TypeW() {
  return (
    <Typewriter
      options={{
        strings: ['Full Stack Developer', 'Computing Student at Queen\'s University', 'Tech Enthusiast'],
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default TypeW;