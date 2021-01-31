import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Text } from './pages/Text'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Find in the text</h1>
        <Route path="/" component={Text} exact />
      </div>
    </BrowserRouter>
  )
}

export default App
