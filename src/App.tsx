import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Main, Navi } from './pages';
import { Popup, Shadow } from './components';
import './app.scss';


const App = () => {
  const [pop, setPop] = useState(0);
  const [since, setSince] = useState(0)

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const navprop = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const PopupClick = () => {
    setPop(1);
  }

  const SinceClick = (props : number) => {
    console.log(props);
    setSince(props);
  }

  return (
    <div>
      <animated.div style={props}>
        <Main />
      </animated.div>
      <animated.div style={navprop}>
        <Navi onPop={PopupClick} onSince={SinceClick}/>
      </animated.div>
      {/* <Popup/> */}
      {pop !== 0 && <Shadow/>}
    </div>
  )
};

export default App;