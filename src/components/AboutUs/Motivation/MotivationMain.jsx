import React from 'react'
import ContentTemplate from '../../sharedComponents/ContentTemplate'
import GeneralCover from '../../sharedComponents/GeneralCover'
import MotivationObject from './MotivationObject'

function MotivationMain() {
  return (
    <div>
      <GeneralCover />
      <ContentTemplate object={MotivationObject}/>
    </div>
  )
}

export default MotivationMain