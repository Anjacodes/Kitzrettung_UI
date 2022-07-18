import React from 'react'
import BackgroundCover from './BackgroundCover'
import ForegroundCover from './ForegroundCover'

function Cover() {
  return (
    <div className="static">
      <BackgroundCover className="-z-10 static"/>
      <ForegroundCover className="absolute top-0 z-10"/>
    </div>
  )
}

export default Cover