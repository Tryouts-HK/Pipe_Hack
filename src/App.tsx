import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './site/home';
import { NotFound } from './notfound';
import { SignIn } from './auth/main/signin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/login' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
