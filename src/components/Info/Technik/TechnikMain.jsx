import React from 'react'
import ContentTemplate from '../../sharedComponents/ContentTemplate'
import GeneralCover from '../../sharedComponents/GeneralCover'
import TechnikObject from './TechnikObject'

function TechnikMain() {
  return (
    <section>
      <GeneralCover />
      <ContentTemplate object={TechnikObject}/>
    </section>
  )
}

export default TechnikMain