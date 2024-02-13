import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import { Main, Navi } from './pages';
import './app.scss';


const App = () => {
  const props = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
    });

  const navprop = useSpring({
      from: { x: -50 },
      to: { x: 0 },
    });

  return (
    <div>
      <animated.div style={props}>
        <Main />
      </animated.div>
      <animated.div style={navprop}>
        <Navi />
      </animated.div>
    </div>
  )
};

export default App;