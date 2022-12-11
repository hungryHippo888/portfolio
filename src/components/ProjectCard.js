import "./ProjectCard.css";
import { useState } from "react";
import cn from "classnames";
import { Image } from "react-bootstrap";
import ArcDeTriomphe from "../images/photos/ArcDeTriomphe.png";

function ProjectCard({ name, image, description, tech, card, href, color }) {

  // got hover effect for cards from here: https://dcode.domenade.com/tutorials/image-hover-text-effect-html-css
  return (
    <>
    	<div className="imageCont">
    <img className="image__img" src={require ('../images/' + image + ".png")} alt="Projects"></img>
    		<div className="image__overlay image__overlay--primary" style={{background: color}}>
			<div className="image__title">{name}</div>
			<p className="image__description">
				{description}
			</p>
		</div>
	</div>
      {/* <Image src={require ('../images/' + image + ".png")} rounded></Image> */}
      </>

    //   <div className="projectCard">
    //     <h2 style={cardTitle}>{name}</h2>
    //     <p>{description}</p>
    //     {tech.map((item) => (
    //      <div className="techWrap"><p>{item}</p></div>))}
    //   </div>
    // </>
  );
}

export default ProjectCard;
