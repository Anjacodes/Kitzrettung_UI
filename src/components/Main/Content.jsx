import React from 'react'
import Member from './Member'
import Mission from './Mission'
import News from './News'
import Work from './Work'

function Content() {
  return (
    <section className="mx-12 my-48 lg:mx-44 flex flex-col">
      <Mission />
      <Work />
      <Member />
      <News />
    </section>
  )
}

export default Content