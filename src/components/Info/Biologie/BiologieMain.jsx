import React from 'react'
import ContentTemplate from '../../sharedComponents/ContentTemplate'
import GeneralCover from '../../sharedComponents/GeneralCover'
import BiologieObject from './BiologieObject'

function BiologieMain() {
  return (
    <div>
      <GeneralCover />
      <ContentTemplate object={BiologieObject}/>
    </div>
  )
}

export default BiologieMain