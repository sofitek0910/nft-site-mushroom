import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Mint from '../minting'
import Stake from '../staking'

const App = () => (
  <div>
    {/* <header className="text-center">
      <Link className="nav-tab" to="/">Home</Link>
      <Link className="nav-tab" to="/minting">Minting</Link>
      <Link className="nav-tab" to="/staking">Staking</Link>
    </header> */}

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/minting" component={Mint} />
      <Route exact path="/staking" component={Stake} />
    </main>
  </div>
)

export default App
