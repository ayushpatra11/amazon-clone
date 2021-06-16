import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import store from './redux/store';
import {getState} from 'redux';
import {Provider} from 'react-redux';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';

console.log(store.getState())

function App() {
  return (
    <div className="App">
    <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          <div>  
            <Navbar />
            
              <Route path="/" exact component={Landing} />
            
            
              <Route path="/cart" exact component={Cart} />
            
            </div>
            </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
