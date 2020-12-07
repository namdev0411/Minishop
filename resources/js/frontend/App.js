import Header from './components/Header';
import React from 'react';
import Products from './features/Products/index';
import Cart from './features/Cart/index';
import { Redirect, Route ,Switch, BrowserRouter} from 'react-router-dom';
import NotFound from './components/NotFound';
import './App.scss';
function App() {
  return (
    <div className="App">
      <Header/>
      <Cart/>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route path="/home" component={Products} />
          <Route component={NotFound}　/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
