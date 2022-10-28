import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook'
import { MultiplesCustomHooks } from './03-examples/MultiplesCustomHooks'
import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultiplesCustomHooks />
  </React.StrictMode>
)
