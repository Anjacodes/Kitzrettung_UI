import React from 'react'
import Content from './Content'
import Cover from './Cover'
import Banner from './Banner'

function Main({menuVisible, setMenuVisible}) {
  return (
    <main>
      <Cover menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <Banner />
      <Content />
    </main>
  )
}

export default Main