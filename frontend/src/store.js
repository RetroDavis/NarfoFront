import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import text from './reducers'
import App from './App'
import Member from './Member'
import Login from './Login'


const store = createStore(text)

render(
  <Provider store={store}>
    <App />
    <Member/>
    <Login/>
  </Provider>,
  document.getElementById('root')
)