import './App.css';
import { Routes, Route } from 'react-router-dom';
import Page40 from './Pages/Page40';
import Page39 from './Pages/Page39';
import Page38 from './Pages/Page38';
import Page37 from './Pages/Page37';

function App() {
  return (
    <Routes>
      <Route path='/page40' element={<Page40 />} />
      <Route path='/page39' element={<Page39 />} />
      <Route path='/page38' element={<Page38 />} />
      <Route path='/page37' element={<Page37 />} />
      <Route path='/' element={<Page37 />} />
    </Routes>
  );
}

export default App;
