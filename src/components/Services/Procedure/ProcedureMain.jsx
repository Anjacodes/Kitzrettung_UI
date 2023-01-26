import React from 'react'
import GeneralCover from '../../sharedComponents/GeneralCover'
import ContentTemplate from '../../sharedComponents/ContentTemplate'
import ProcedureObject from './ProcedureObject'


function ProcedureMain() {
  return (
    <div>
      <GeneralCover />
      <ContentTemplate object={ProcedureObject}/>
    </div>
  )
}

export default ProcedureMain