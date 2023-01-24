import React from 'react'
import ContentTemplate from '../../sharedComponents/ContentTemplate'
import GeneralCover from '../../sharedComponents/GeneralCover'
import MotivationContent from './MotivationContent'
import MotivationObject from './MotivationObject'

function MotivationMain() {
  return (
    <div>
      <GeneralCover />
      <ContentTemplate object={MotivationObject}/>
      {/* <MotivationContent /> */}
    </div>
  )
}

export default MotivationMain