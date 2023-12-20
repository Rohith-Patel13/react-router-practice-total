import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'

import NotFound from './components/NotFound'
import BlogItemDetails from './components/BlogItemDetails'
import Home from './components/Home'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      {/* <Route exact path="/" component={BlogList} /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/blogs/:id" component={BlogItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
