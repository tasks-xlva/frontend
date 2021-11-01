import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.variable.min.css'
import { App } from 'app'
import { ConfigProvider } from 'antd'

ConfigProvider.config({ theme: { primaryColor: '#272727' } })

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)
