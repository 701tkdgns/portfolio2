import React, { useState } from "react";

interface CareerCard {
    onTitle: string;
    onDays: string;
    onPart: string;
    onContent: string;
}

const Career: React.FC<CareerCard> = ({ onTitle, onDays, onPart, onContent }) => {
    const [overlayActive, setOverlayActive] = useState(false);
    const toggleOverlay = () => {
        setOverlayActive(!overlayActive);
    }
    return (
        <div className='psh__portfolio-career'>
            <div className='psh__portfolio-career-header'>
                <h3>{onTitle}</h3>
            </div>
            <div className='psh__portfolio-career-body'>
                <div className='psh__portfolio-career-text'>
                    <span className='psh__portfolio-career-text-contents'><h5>재직 : {onDays}</h5></span>
                    <span className='psh__portfolio-career-text-contents'><h5>개발 : {onPart}</h5></span>
                    <span className='psh__portfolio-career-text-contents'><h5>역할 : {onContent}</h5></span>
                </div>
            </div>
        </div>
    )
}

export default Career;