import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.variable.min.css'
import 'src/styles/colors.scss'
import { ConfigProvider } from 'antd'
import './styles/index.scss'

ConfigProvider.config({ theme: { primaryColor: '#272727' } })

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)
