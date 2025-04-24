import React from 'react'
import { Provide } from './components/NewUPC/Provide'
import Profile from './components/NewUPC/Profile'
import Update from './components/NewUPC/Update'

const App = () => {
  return (
    <div>
      <Provide>
        <Profile/>
        <Update/>
      </Provide>
    </div>
  )
}

export default App