import React from 'react'
import profile from '../../assets/profile.jpg';
import { SiTypescript, SiMongodb, SiRedis, SiJenkins, SiMysql, SiNodedotjs, SiReact, SiCashapp, SiDotnet } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import Career from '../card/Career';

const About = () => {
  return (
    <div className='about'>
      <div className='about-header'>
        <h2>ParkSangHoon</h2>
      </div>
      <div className='about-body'>
        <div className='about-body-profile'>
          <img src={profile} alt="profile" />
          <div className='about-body-text'>
            <h3>Tech Stack</h3>
            <div className='about-body-text-part'>
              <div className='about-body-text-tech'><TbBrandCSharp /> <SiTypescript /> <FaJava /> <SiReact /> </div>
              <div className='about-body-text-tech'><SiDotnet /> <SiNodedotjs /> <BiLogoSpringBoot /></div>
              <div className='about-body-text-tech'><SiMysql /> <SiRedis /> <SiMongodb /> <SiJenkins /></div>
            </div>
          </div>
          <div className='about-body-career'>
            <h3 className='about-body-career-title'>Certificate</h3>
            <div className='about-body-career-text'>
              <h4>정보처리기사</h4>
            </div>
          </div>
          <div className='about-body-career'>
            <h3 className='about-body-career-title'>이력</h3>
            <div>
              <Career
                onTitle={'(주)파나나스튜디오'}
                onDays={'2024/11 ~ 2026/02'}
                onPart={'개발'}
                onContent={'스타세일러 서버 개발'}
              />
            </div>
            <div></div>
            <div>
              <Career
                onTitle={'(주)행복한다람쥐단'}
                onDays={'2022/06 ~ 2024/02'}
                onPart={'개발'}
                onContent={'로블록스, 조선메타실록 QA 및 설정, 웹 백엔드 개발'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;