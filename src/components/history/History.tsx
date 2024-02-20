import React from 'react';
import {Card} from '..'
import roblox from '../../assets/roblox.png'
import vr from '../../assets/vr.png'
import webpage from '../../assets/webpage.png'


const History = () => {
  return (
    <div className='history'>
      <div className='history-header'>
        <h2>포트폴리오</h2>
      </div>
      <div className='history-body'>
        <Card 
          onTitle={'메타버스메이커'}
          onLink={'http://metaversemaker.kr'}
          onDays={'2022/06 ~ 2022/07'}
          onContents={'바닐라 웹 디자인 개발(HTML, CSS, JS)'} />

        <Card 
          onTitle={'로블록스 원자력환경공단(고준위)'}
          onLink={'https://www.roblox.com/games/10825715607/unnamed'}
          onDays={'2022/09 ~ 2022/11'}
          onContents={'클라이언트 및 로직 개발(Roblox, Lua)'} />

        <Card 
          onTitle={'광주그린카진흥원 웹 VR'}
          onLink={'https://www.gigca.or.kr/gjgcavr2/tech_tour.html'}
          onDays={'2022/12 ~ 2023/01'}
          onContents={'기술지원동 웹 VR 개발(XML, krPano)'} />

        <Card 
          onTitle={'조선메타실록'}
          onLink={'https://www.roblox.com/games/10825715607/unnamed'}
          onDays={'2023/03 ~ 2023/06'}
          onContents={'조선메타실록 QA 및 NPC 대사 작업'} />

      </div>
    </div>
  )
}

export default History