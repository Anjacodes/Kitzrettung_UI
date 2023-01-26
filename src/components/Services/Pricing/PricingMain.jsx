import React from 'react'
import ContentTemplate from '../../sharedComponents/ContentTemplate'
import GeneralCover from '../../sharedComponents/GeneralCover'
import PricingObject from './PricingObject'

function PricingMain() {
  return (
    <div>
      <GeneralCover />
      <ContentTemplate object={PricingObject}/>
    </div>
  )
}

export default PricingMain