import React from 'react'
import profile from '../../assets/profile.jpg';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiMongodb, SiRedis, SiJenkins, SiKubernetes, SiDocker, SiMysql, SiNodedotjs, SiReact } from "react-icons/si";

const About = () => {
  return (
    <div className='about'>
      <div className='about-header'>
        <h2>박상훈</h2>
      </div>
      <div className='about-body'>
        <div className='about-body-profile'>
          <img src={profile} alt="profile" />
          <div className='about-body-text'>
            <h3>기술 스택</h3>
            <div className='about-body-text-part'>
              <div className='about-body-text-tech'><SiHtml5 /> <SiCss3 /> <SiJavascript /> <SiReact /> <SiTypescript /></div>
              <div className='about-body-text-tech'><SiNodedotjs /> <SiMysql /> <SiRedis /> <SiMongodb /></div>
              <div className='about-body-text-tech'><SiDocker /> <SiKubernetes /> <SiJenkins /></div>
            </div>
          </div>
          <div className='about-body-career'>
            <h3>자격증</h3>
            <div className='about-body-career-text'>
              <h4>정보처리기사</h4>
            </div>
          </div>
          <div className='about-body-career'>
            <h3>이력</h3>
            <div className='about-body-career-text'>
              <h4>(주)행복한다람쥐단</h4>
              <h5 style={{margin:'1rem 0'}}>직무 : 웹 프론트, 백엔드, 게임 QA, 로블록스 개발</h5>
              <h5>재직일 : 2022/06~2024/02</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;