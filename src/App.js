import React from 'react'
import BottomNav from './components/BottomNav'
import UserCard from './components/UserCard'
import Shop from './Shop'
import Home from './Home'
import About from './About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router >
      <div className="App">
        <BottomNav />
          <Switch >
            <Route path='/about' exact component={About}/>
            <Route path='/shop' exact component={Shop} />
            <Route path='/' exact component={Home} />
            <Route path='/shop/:id' exact component={UserCard}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
