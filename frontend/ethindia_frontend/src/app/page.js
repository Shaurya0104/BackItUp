"use client"
import Intro from './components/intro'
import Header from './components/header'
import Login from './components/login'
import Edit_contracts from './components/edit_contracts'

import '@fortawesome/fontawesome-svg-core/styles.css'


export default function Home() {
  return (
    <div >

    <main className="flex top-24 min-h-screen flex-col items-center md:px-12 py-4 px-4 overflow-x-hidden">
      <Header></Header>
      <Intro></Intro>
      <Login></Login>
      <Edit_contracts></Edit_contracts>
    </main>
    </div>
  )
}
