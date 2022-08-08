import React from 'react'
import { Outlet } from 'react-router-dom'
import Content from './Content'
import Cover from './Cover'

function About () {
  return (
    <section className='relative bg-slate-50'>
      <Cover />
      <Outlet />
      <Content />
    </section>
  )
}

export default About