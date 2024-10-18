import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { ButtonComponents } from './components/button'
import { HeaderComponents } from './components/header'
import { SectionComponents } from './components/section'
import { VazioComponents } from './components/vazio'
import { FooterComponents } from './components/footer'

export function App() {
  
  return (
    <>
     <div>
        <div>
        <HeaderComponents/>
        </div>
          <VazioComponents/>
        <div>
          <SectionComponents/>
        </div>
        <VazioComponents/>
        <div>
          <FooterComponents/>
        </div>
     </div>

    </>
  )
}


