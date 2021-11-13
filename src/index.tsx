import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.variable.min.css'
import { App } from 'app'
import { ConfigProvider } from 'antd'
import { Authorization } from 'features/lib/authorization'
import { api } from 'shared/api'
import { SWRConfig } from 'swr'
import { AxiosRequestConfig } from 'axios'

ConfigProvider.config({ theme: { primaryColor: '#272727' } })

ReactDOM.render(
  <Authorization>
    <ConfigProvider componentSize='large'>
      <BrowserRouter>
        <SWRConfig
          value={{
            fetcher: (url: string, config?: AxiosRequestConfig) =>
              api.get(url, config).then((response) => response.data),
          }}
        >
          <App />
        </SWRConfig>
      </BrowserRouter>
    </ConfigProvider>
  </Authorization>,
  document.getElementById('root'),
)
