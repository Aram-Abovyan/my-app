import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { VerticalNavbar } from './components/navbars/VerticalNavbar';
import { HorizontalNavbar } from './components/navbars/HorizontalNavbar';
import { Body } from './components/body';
import { Dashboard } from './components/pages/Dashboard';
import { ShopingList } from './components/pages/ShopingList';
import { Customer } from './components/pages/Customer';
import { store } from './data/store';

function App() {
  return (
    <div className="App">
      <Router>
        <VerticalNavbar />
        <Switch>
          <Route exact path="/dashboard">
            <HorizontalNavbar />
            <Body>
              <Dashboard
                store={store}
              />
            </Body>
          </Route>
          <Route exact path="/shoping_list">
            <Body>
              <ShopingList />
            </Body>
          </Route>
          <Route exact path="/customer">
            <Body>
              <Customer />
            </Body>
          </Route>
        </Switch>
      </Router>
    </div>    
  );
}

export default App;
