import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogoGithub, BiSolidEnvelope, BiSolidUserBadge, BiSolidSpreadsheet } from "react-icons/bi";

interface Navi{
  onPop : () => void;
  onSince : (props: number) => void;
}

const Navi:React.FC<Navi> = ({onPop, onSince}) => {
  const handleGithubLink = () => {
    window.open("https://github.com/701tkdgns", "_blank");
  };
  const clipEmail = async (text : string) => {
      await navigator.clipboard.writeText(text);
  }
  const checkUser = () => {
    onPop()
    onSince(1);
  };

  const checkHistory = () => {
    onPop()
    onSince(2);
  }

  return (
    <div>
      <div className="psh__portfolio-navi">
        <div className="psh__portfolio-navi-container">
            <li className="psh__portfolio-navi-btn"><BiLogoGithub onClick={() => handleGithubLink()}/></li>
            <li className="psh__portfolio-navi-btn"><BiSolidEnvelope onClick={() => clipEmail('714tkdgns@gmail.com')}/></li>
            <li className="psh__portfolio-navi-btn"><BiSolidUserBadge onClick={() => checkUser()} /></li>
            <li className="psh__portfolio-navi-btn"><BiSolidSpreadsheet onClick={() => checkHistory()} /></li>
        </div>
      </div>
    </div>
  )
}

export default Navi;