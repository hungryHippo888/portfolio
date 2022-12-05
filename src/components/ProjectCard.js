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
      {/* <p>{image}</p> */}

      {/* <div tabIndex={card.id} className="flip-card-outer">
        <div
          className={cn("flip-card-inner", {
            showBack,
            "hover-trigger": card.variant === "hover",
          })}
        >
          <div className="card front">
            <div className="card-body d-inline-flex justify-content-center align-items-center"> */}
              {/* style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover",
      backgroundImage: `url(${image})`, borderRadius: "20px", backgroundPosition: "right 0px bottom 0px"}} */}
              {/* <img src={image} alt="hi" style={{width: "100%", height: "60%", position: "absolute", borderRadius: "20px", top: "0px"}}></img> */}
              {/* <h2>{name}</h2>
              <h1>as;dlkfjasdklf;ajsdfkl;asdjfkl;asjfal;skjafsdklas;ld</h1>
              <p>{description}</p>
            </div>
          </div>
          <div className="card back">
            <div className="card-body container justify-content-center align-items-center"></div>
          </div>
        </div>
      </div> */}

      <div className="projectCard">
        <h2 style={cardTitle}>{name}</h2>
        <p>{description}</p>
        {tech.map((item) => (
         <div className="techWrap"><p>{item}</p></div>))}
      </div>
    </>
  );
}

export default ProjectCard;
