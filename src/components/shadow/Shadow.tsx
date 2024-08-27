import React from 'react'

interface Shadow {
  onPop: () => void;
}

const Shadow: React.FC<Shadow> = ({onPop}) => {
  return (
    <div className='psh__portfolio-shadow' onClick={()=>onPop()}></div>
  )
}

export default Shadow