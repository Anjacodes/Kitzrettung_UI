import React from 'react'
import ContentTemplate from '../../sharedComponents/ContentTemplate'
import GeneralCover from '../../sharedComponents/GeneralCover'
import LegalObject from './LegalObject'

function LegalMain() {
  return (
    <section>
      <GeneralCover />
      <ContentTemplate object={LegalObject}/>
    </section>
  )
}

export default LegalMain