import { VerticalNavbar } from './components/navbars/VerticalNavbar';
import { HorizontalNavbar } from './components/navbars/HorizontalNavbar';
import { Body } from './components/body';

function App() {
  return (
    <div className="App">
      <VerticalNavbar />
      <HorizontalNavbar />
      <Body />
    </div>    
  );
}

export default App;
