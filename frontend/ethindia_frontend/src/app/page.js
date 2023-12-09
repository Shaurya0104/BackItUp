"use client"
import Intro from './components/intro'
import Header from './components/header'
import Login from './components/login'
import Edit_contracts from './components/edit_contracts'
import Delete_contract from './components/delete_contract'
import Verify_aadhar from './components/verify_aadhar'
import Create_new_contract from './components/create_new_contract'
import Logout_model from './components/logoutmodel'
import Network_model from './components/network_model'
import Page2 from './components/page2'
import Topbar from './components/topbar'
import Wallet_connect_model from './components/wallet_connect_model'
import Wallet_model from './components/wallet_model'
import Wireframe_6 from './components/wireframe_6'

import '@fortawesome/fontawesome-svg-core/styles.css'


export default function Home() {
  return (
    <div >

    <main className="flex top-24 min-h-screen flex-col items-center md:px-12 py-4 px-4 overflow-x-hidden">
      <Header></Header>
      <Intro></Intro>
      <Page2></Page2>
      <Login></Login>
      <Edit_contracts></Edit_contracts>
      <Delete_contract></Delete_contract>
      <Verify_aadhar></Verify_aadhar>
      <Logout_model></Logout_model>
      <Create_new_contract></Create_new_contract>
      <Network_model></Network_model>
      <Topbar></Topbar>
      <Wallet_connect_model></Wallet_connect_model>
      <Wallet_model></Wallet_model>
      <Wireframe_6></Wireframe_6>
      
    </main>
    </div>
  )
}
