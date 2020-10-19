import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import Routes from './layouts'

const App = () => {
  return (
    <Provider store={store}>
      <div className='app-container'>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
