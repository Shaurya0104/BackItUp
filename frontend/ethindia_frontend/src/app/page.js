"use client";
import Intro from "./components/intro";
import Header from "./components/header";
import Login from "./components/login";
import { AnonAadhaarProvider } from "anon-aadhaar-react";

import "@fortawesome/fontawesome-svg-core/styles.css";

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
        </main>
      </div>
    </AnonAadhaarProvider>
  );
}
