import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.variable.min.css'
import { App } from 'app'
import { ConfigProvider } from 'antd'
import { Authorization } from 'processes/lib/authorization'

ConfigProvider.config({ theme: { primaryColor: '#272727' } })

ReactDOM.render(
  <Authorization>
    <ConfigProvider componentSize='large'>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </Authorization>,
  document.getElementById('root'),
)
