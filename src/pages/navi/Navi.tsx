import React from 'react';
import { Tooltip } from 'react-tooltip';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiLogoGithub, BiSolidEnvelope, BiSolidUserBadge, BiSolidSpreadsheet } from "react-icons/bi";

interface Navi {
  onPop: () => void;
  onSince: (props: number) => void;
}

const Navi: React.FC<Navi> = ({ onPop, onSince }) => {
  const handleGithubLink = () => {
    window.open("https://github.com/701tkdgns", "_blank");
  };
  const clipEmail = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copy email");
    } catch (error) {
      toast.error("Failed to copy email");
    }
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
          <li className="psh__portfolio-navi-btn"><BiLogoGithub onClick={() => handleGithubLink()} /></li>
          <li className="psh__portfolio-navi-btn" onClick={() => clipEmail('714tkdgns@gmail.com')}>
            <BiSolidEnvelope />
          </li>
          <li className="psh__portfolio-navi-btn"><BiSolidUserBadge onClick={() => checkUser()} /></li>
          <li className="psh__portfolio-navi-btn"><BiSolidSpreadsheet onClick={() => checkHistory()} /></li>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Navi;