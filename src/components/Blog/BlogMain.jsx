import React from 'react'
import UnderConstruction from '../UnderConstruction'
import News from '../Main/News'
import GeneralCover from '../sharedComponents/GeneralCover'

function BlogMain() {
  return (
    <>
      <GeneralCover />
      <div className='mx-12 my-32 lg:my-48 lg:mx-44'>
          <News /> 
      </div>
    </>
  )
}

export default BlogMain