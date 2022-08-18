import React from 'react'
import Member from './Member'
import Mission from './Mission'
import News from './News'
import Work from './Work'

function Content() {
  return (
    <section className="mx-20 my-48 lg:mx-52">
      <Mission />
      <Work />
      <Member />
      <News />
    </section>
  )
}

export default Content