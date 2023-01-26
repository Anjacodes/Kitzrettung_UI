import React from 'react'
import ContentTemplate from '../../sharedComponents/ContentTemplate'
import Cover from '../../sharedComponents/GeneralCover'
import WorkObject from './WorkObject'

function Work() {
  return (
    <section>
      <Cover />
      <ContentTemplate object={WorkObject}/>
    </section>
  )
}

export default Work