import './styles/app.scss';
import { ReactComponent as Logo } from './assets/shared/logo.svg'
import NavMenu from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <NavMenu />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
