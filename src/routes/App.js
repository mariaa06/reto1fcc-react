import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Quote1 from '../pages/quote1';
import Quote2 from '../pages/quote2';
import Quote3 from '../pages/quote3';
import Quote4 from '../pages/quote4';
import Quote5 from '../pages/quote5';

const App = () => {
  return ( 
    <>
    <Quote1/>
    <BrowserRouter>
      <Switch>
        <Route path="/" pages={Quote2}/>
        <Route path="/" pages={Quote3}/>
        <Route path="/" pages={Quote4}/>
        <Route path="/" pages={Quote5}/>
      </Switch>
    </BrowserRouter>
    </>
   );
}
 
export default App;