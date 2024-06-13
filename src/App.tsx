import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './site/home';
import { NotFound } from './notfound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
