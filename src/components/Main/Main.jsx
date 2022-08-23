import React from 'react'
import Content from './Content'
import Cover from './Cover'

function Main({menuVisible, setMenuVisible}) {
  return (
    <main>
      <Cover menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
      <Content />
    </main>
  )
}

export default Main