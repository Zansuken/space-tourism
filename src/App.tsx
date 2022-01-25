import './styles/app.scss';
import { ReactComponent as Logo } from './assets/shared/logo.svg'
import NavMenu from './components/Nav';

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <NavMenu />
      </header>
    </div>
  );
}

export default App;
