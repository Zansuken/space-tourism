import './styles/app.scss';
import { ReactComponent as Logo } from './assets/shared/logo.svg'
import NavMenu from './components/Nav';
import Home from './components/Home';
import Destination from './components/Destination';

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <NavMenu />
      </header>
      <main>
        <Home />
        <Destination />
      </main>
    </div>
  );
}

export default App;
