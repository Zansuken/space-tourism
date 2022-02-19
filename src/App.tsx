import './styles/app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Credits from './components/Credits';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Credits />
    </BrowserRouter>
  );
}

export default App;
