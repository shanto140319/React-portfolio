import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ReactProjects from './pages/ReactProjects';
import ProjectPage from './pages/ProjectPage';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/projects'>
          <ProjectPage/>
        </Route>
        <Route exact path='/resume'>
          <Resume/>
        </Route>
        <Route exact path='/contact'>
          <Contact/>
        </Route>
        <Route exact path='/projects/react'>
          <ReactProjects/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
