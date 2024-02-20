import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Main, Navi } from './pages';
import { Popup, Shadow } from './components';
import './app.scss';


const App = () => {
  const [pop, setPop] = useState(false);
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
    setPop((prev) => !prev);
  }

  const SinceClick = (props : number) => {
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
      {pop && <Popup onPop={PopupClick} popSince={since}/>} 
      {pop && <Shadow/>}
    </div>
  )
};

export default App;