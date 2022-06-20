import React from "react"
import Info from "./components/Info.js"
import About from "./components/About.js"
import Interest from "./components/Interest.js"
import Footer from "./components/Footer.js"

export default function App(){
    return(<main className="main-component">
           <Info/>
           <div className="abt-int">
                <About/>
                <Interest/>
           </div>
           <Footer/>
           </main>)
}