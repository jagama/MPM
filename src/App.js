import React, {Suspense} from 'react';
import { Route, HashRouter } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';
import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import './App.css';

import Nav from './components/navigation'
import Footer from "./components/footer";
import Home from './components/home'
import Policy from './components/policy'

import AOS from 'aos'

function App() {
    
    AOS.init()
  return (
    <HashRouter basename='/'>
      <ScrollToTop>
        <div className='App'>
            <Suspense fallback={"it"}>
                <Nav/>
                <Route exact path='/' component={Home}/>
                <Route path='/policy' component={Policy}/>
                <Footer/>
            </Suspense>
        </div>
        </ScrollToTop>
    </HashRouter>


  );

}

export default App;
