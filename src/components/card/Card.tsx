import React, { useState } from 'react'

interface photoCard {
    onTitle: string;
    onDays: string;
    onContents: string;
}

const Card: React.FC<photoCard> = ({ onTitle, onDays, onContents }) => {
    const [overlayActive, setOverlayActive] = useState(false);
    const toggleOverlay = () => {
        setOverlayActive(!overlayActive);
    }
    return (
        <div className='psh__portfolio-card'>
            <div className='psh__portfolio-card-header'>
                <h3>{onTitle}</h3>
            </div>
            <div className='psh__portfolio-card-body'>
                <div>
                    <div className='psh__portfolio-card-text'>
                        <span className='psh__portfolio-card-text-contents'><h5>프로젝트명 :</h5>{onTitle}</span>
                        <span className='psh__portfolio-card-text-contents'><h5>개발일자 :</h5>{onDays}</span>
                        <span className='psh__portfolio-card-text-contents'><h5>역할 :</h5>{onContents}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card