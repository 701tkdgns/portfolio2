import React, { useEffect } from 'react'
import { BiX } from "react-icons/bi";
import { About, History } from '../';
import { animated } from '@react-spring/web';

interface Pop {
  onPop: () => void;
  popSince: number;
}

const Popup: React.FC<Pop> = ({ onPop, popSince  }) => {

  // useEffect(() => {
  //   console.log(popSince);
  // }, []);

  return (
    <div>
      <div className="psh__portfolio-popup-header">
        <BiX onClick={() => onPop()} />
      </div>
      <div className="psh__portfolio-popup-body">
        {popSince === 1 && <About />}
        {popSince === 2 && <History />}
      </div>
    </div>
    
  )
}

export default Popup