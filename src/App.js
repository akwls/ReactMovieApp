import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import WebFont from 'webfontloader';
import {useEffect} from 'react';
import './css/App.css';


function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto']
      }
    });
   }, []);
  
  return <Router>
    <Switch>
    <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}



export default App;
