import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogoGithub, BiSolidEnvelope, BiSolidUserBadge, BiSolidSpreadsheet } from "react-icons/bi";

const Navi = () => {
  const handleGithubLink = () => {
    window.open("https://github.com/701tkdgns", "_blank");
  };
  const clipEmail = async (text : string) => {
      await navigator.clipboard.writeText(text);
  }
  return (
    <div>
      <div className="psh__portfolio-navi">
        <div className="psh__portfolio-navi-container">
            <li className="psh__portfolio-navi-btn"><BiLogoGithub onClick={() => handleGithubLink()}/></li>
            <li className="psh__portfolio-navi-btn"><BiSolidEnvelope onClick={() => clipEmail('714tkdgns@gmail.com')}/></li>
            <li className="psh__portfolio-navi-btn"><BiSolidUserBadge /></li>
            <li className="psh__portfolio-navi-btn"><BiSolidSpreadsheet /></li>
        </div>
      </div>
    </div>
  )
}

export default Navi;