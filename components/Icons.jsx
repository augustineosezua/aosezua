const icons = [
  "/about-svgs/react.svg",
  "/about-svgs/javascript 2.svg",
  "/about-svgs/python.svg",
  "/about-svgs/html-5.svg",
  "/about-svgs/css-3.svg",
  "/about-svgs/mysql.svg",
  "/about-svgs/git-icon.svg",
  "/about-svgs/figma.svg",
  "/about-svgs/adobe-illustrator.svg",
  "/about-svgs/java 2.svg",
];

const loopIcons = () => {
  let div = [];
  // Create multiple sets for seamless scrolling
  for (let i = 0; i < 3; i++) {
    icons.forEach((icon, index) => {
      div.push(
        <img
          key={`${index}-${i}`}
          src={icon}
          alt={`Icon ${index}`}
          className="h-12 w-12 flex-shrink-0"
        />
      );
    });
  }
  return div;
};

function Icons() {
  return <>{loopIcons()}</>;
}

export default Icons;
