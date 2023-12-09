"use client";
import { useState } from "react";
import Login from "../login";
export default function Header() {
  let [navBarOpen, setNavBar] = useState(false);

  return (
    <nav
      className={
        "mt-0 fixed container z-10 flex flex-wrap justify-between items-center w-[100%] lg:min-w-[95vw] bg-opacity-0 h-10" 
      }
    >
      <div className=" lg:min-w-[95vw] container flex flex-wrap justify-between items-center sticky">
        <div>
          <img src="images/hackathon.svg" className="h-10 "></img>
        </div>

        <div
          className={
            "pr-5 hidden md:block inline float-right  justify-items space-x-12 text-[16px]"
          }
        >
         <Login></Login>
        </div>

        <button
          className="float-right block md:hidden"
          onClick={() => setNavBar(~navBarOpen)}
        >
          <img
            src={navBarOpen ? "images/close.svg" : "images/hamburger.svg"}
            className={"h-14 pr-2 "}
          />
        </button>
      </div>
      
      {/* <div className={ (navBarOpen ? "block" : "hidden") + " md:hidden mt-4 mb-8 mx-10 w-full"   }>
        <a href="/#about" onClick={() => setNavBar(~navBarOpen)}>About</a>
        <hr className="block md:hidden my-4 border-[1px] border-grey"></hr> */}

        {/* <a href="/#timelines" onClick={() => setNavBar(~navBarOpen)}>Timelines</a>
        <hr className="block md:hidden my-4 border-[1px] border-grey"></hr> */}
        
        {/* <a href="/#sponsors" onClick={() => setNavBar(~navBarOpen)}>Sponsors</a>
        <hr className="block md:hidden my-4 border-[1px] border-grey"></hr>
        <a href="/#faqs" onClick={() => setNavBar(~navBarOpen)}>FAQs</a>
      </div> */}
        

    </nav>
  );
}
