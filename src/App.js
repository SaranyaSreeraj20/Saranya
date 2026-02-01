import './App.css';
import { Routes, Route } from 'react-router-dom';
import Page40 from './Pages/Page40';
import Page39 from './Pages/Page39';
import Page38 from './Pages/Page38';
import Page37 from './Pages/Page37';
import Page45 from './Pages/Page45';
import Page46 from './Pages/Page46';
import Page47 from './Pages/Page47';
import Page48 from './Pages/Page48';
import Page49 from './Pages/Page49';

function App() {
  return (
    <Routes>
      <Route path='/invite' element={<Page49 />} />
      <Route path='/page48' element={<Page48 />} />
      <Route path='/page47' element={<Page47 />} />
      <Route path='/page46' element={<Page46 />} />
      <Route path='/page45' element={<Page45 />} />
      <Route path='/help' element={<Page45 />} />
      <Route path='/page40' element={<Page40 />} />
      <Route path='/page39' element={<Page39 />} />
      <Route path='/page38' element={<Page38 />} />
      <Route path='/page37' element={<Page37 />} />
      <Route path='/' element={<Page37 />} />
    </Routes>
  );
}

export default App;
