import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { VerticalNavbar } from './components/navbars/VerticalNavbar';
import { HorizontalNavbar } from './components/navbars/HorizontalNavbar';
import { Body } from './components/body';
import { Dashboard } from './components/pages/Dashboard';
import { ShopingList } from './components/pages/ShopingList';
import { Customer } from './components/pages/Customer';
import { NavLink } from './components/navbars/NavLink';
import { store } from './data/store';

function App() {
  const handleClick = (filter: string) => () => {
    store.changeFilter(filter);
  }
  return (
    <div className="App">
      <Router>
        <VerticalNavbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route exact path="/dashboard">
            <HorizontalNavbar title={'Courses'}>
              <NavLink
                store={store}
                handleClick={handleClick('popular')}
                value={'Popular'}
              />
              <NavLink
                store={store}
                handleClick={handleClick('favorite')}
                value={'Favorite'}
              />
              <NavLink
                store={store}
                handleClick={handleClick('new')}
                value={'New'}
              />
            </HorizontalNavbar>
            <Body>
              <Dashboard
                store={store}
              />
            </Body>
          </Route>
          <Route exact path="/shoping_list">
            <HorizontalNavbar title={'Shoping List'}>
              <NavLink
                store={store}
                handleClick={handleClick('first')}
                value={'First'}
              />
              <NavLink
                store={store}
                handleClick={handleClick('second')}
                value={'Second'}
              />
            </HorizontalNavbar>
            <Body>
              <ShopingList />
            </Body>
          </Route>
          <Route exact path="/customer">
            <HorizontalNavbar title={'Customer'}>
              <NavLink
                store={store}
                handleClick={handleClick('first')}
                value={'First'}
              />
              <NavLink
                store={store}
                handleClick={handleClick('second')}
                value={'Second'}
              />
            </HorizontalNavbar>
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
