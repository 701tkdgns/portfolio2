import React, { useState } from 'react'

interface photoCard {
    onTitle: string;
    onLink: string;
    onDays: string;
    onContents: string;
}

const Card: React.FC<photoCard> = ({ onTitle, onLink, onDays, onContents }) => {
    const [overlayActive, setOverlayActive] = useState(false);
    const onImgClick = () => {
        window.open(onLink, '_blank')
    };
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
                    <div>
                        <a href={onLink}>링크</a>
                    </div>
                    {/* <div className='psh__portfolio-card-photo' onClick={onImgClick} onMouseEnter={toggleOverlay} onMouseLeave={toggleOverlay}>
                        <img src={onPic} alt={onTitle} />
                        <div className={`psh__portfolio-card-photo-overlay ${overlayActive ? 'active' : ''}`}>바로가기</div>
                    </div> */}
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