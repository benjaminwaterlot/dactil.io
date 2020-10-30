import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ChakraProvider, CSSReset } from '@chakra-ui/core'
import { RecoilRoot } from 'recoil'
import theme from './chakra'

console.log({ theme })

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <App />
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
