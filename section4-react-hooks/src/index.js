import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<App tab='home' />)    //React 18 ile ReactDOM.render() dememize artık gerek yok.

// render nedir anlamak için:
// https://omergulcicek.github.io/react/hizli-baslangic/elementleri-render-etmek.html
