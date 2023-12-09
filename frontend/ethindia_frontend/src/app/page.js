"use client";
import Intro from "./components/intro";
import Header from "./components/header";
import Login from "./components/login";
import { AnonAadhaarProvider } from "anon-aadhaar-react";
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
import Your_contracts_dashboard from './components/your_contracts_dashboard'
import '@fortawesome/fontawesome-svg-core/styles.css'


export default function Home() {
  return (
    <AnonAadhaarProvider
      _appId={"609246576999142755181287323616835836365844250624"}
      _testing={true}
    >
      <div>
        <main className="flex top-24 min-h-screen flex-col items-center md:px-12 py-4 px-4 overflow-x-hidden">
          <Header></Header>
          <Intro></Intro>
          <Login></Login>
          <Page2></Page2>
          <Edit_contracts></Edit_contracts>
          <Delete_contract></Delete_contract>
          <Verify_aadhar></Verify_aadhar>
          <Logout_model></Logout_model>
          <Create_new_contract></Create_new_contract>
          <Network_model></Network_model>
          <Topbar></Topbar>
          <Wallet_connect_model></Wallet_connect_model>
          <Wallet_model></Wallet_model>
          <Your_contracts_dashboard></Your_contracts_dashboard>
        </main>
      </div>
    </AnonAadhaarProvider>
  );

}
