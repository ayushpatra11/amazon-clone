import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import store from './redux/store';
import {getState} from 'redux';
import {Provider} from 'react-redux';
import Cart from './pages/Cart';

console.log(store.getState())

function App() {
  return (
    <div className="App">
    <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Landing} />
          </Switch> 
          <Switch>
            <Route path="/cart" exact component={Cart} />
          </Switch> 
        </Router>
      </Provider>
    </div>
  );
}

export default App;
