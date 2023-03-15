import React from 'react'
import GeneralCover from '../sharedComponents/GeneralCover'
import ContentTemplate from '../sharedComponents/ContentTemplate'
import SpendenObject from './SpendenObject'

function SpendenMain() {
  return (
    <div>
        <GeneralCover />
        <ContentTemplate object={SpendenObject}/>
    </div>
  )
}

export default SpendenMain