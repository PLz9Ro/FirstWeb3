// import { useState } from 'react'
import { Navbar , Welcome, Transaction , Footer, Services } from "./components"

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transaction />
    <Footer />
  </div>
);


export default App
