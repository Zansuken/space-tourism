import './styles/app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Destination from './pages/Destination';
import NotFound from './pages/NotFound';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
