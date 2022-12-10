import "./ProjectCard.css";
import { useState } from "react";
import cn from "classnames";

function ProjectCard({ name, image, description, tech, card, href, color }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    setShowBack(!showBack);
  }

  function handleFocus() {
    if (card.variant === "focus") {
      setShowBack(true);
    }
  }

  function handleBlur() {
    if (card.variant === "focus") {
      setShowBack(false);
    }
  }

  const cardTitle = {
    background: "-webkit-linear-gradient(left, white , " + color + ")",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
    fontWeight: "bold",
    fontSize: "2.4rem"
  }

  return (
    <>
      <div className="projectCard">
        <h2 style={cardTitle}>{name}</h2>
        <p>{description}</p>
        {/* {tech.map((item) => (
         <div className="techWrap"><p>{item}</p></div>))} */}
      </div>
    </>
  );
}

export default ProjectCard;
