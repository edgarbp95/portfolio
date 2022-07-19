import React from 'react'

const ButtonCard = ({textButton,clase}) => {
  return (
    <div>
      <button className={`button-card font-medium text-sm ${clase}`}>{textButton}</button>
    </div>
  )
}

export default ButtonCard
