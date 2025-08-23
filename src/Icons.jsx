import msqlvg from "./assets/about-svgs/mysql.svg";
import adobeIllustrator from "./assets/about-svgs/adobe-illustrator.svg";
import cssIcon from "./assets/about-svgs/css-3.svg";
import javascriptIcon from "./assets/about-svgs/javascript 2.svg";
import pythonIcon from "./assets/about-svgs/python.svg";
import reactIcon from "./assets/about-svgs/react.svg";
import htmlIcon from "./assets/about-svgs/html-5.svg";
import gitIcon from "./assets/about-svgs/git-icon.svg";
import javaIcon from "./assets/about-svgs/java 2.svg";
import figmaIcon from "./assets/about-svgs/figma.svg";

let icons = [
  reactIcon,
  javascriptIcon,
  pythonIcon,
  htmlIcon,
  cssIcon,
  msqlvg,
  gitIcon,
  figmaIcon,
  adobeIllustrator,
  javaIcon,
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
