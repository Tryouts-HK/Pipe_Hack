import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from './notfound';
import { SignIn } from './auth/main/signin';
import { SignUp } from './auth/main/signup';
import { ResetPassword } from './auth/main/resetPassword';
import { ForgotPassword } from './auth/main/forgotPassword';
import { ChangePassword } from './auth/main/changePassword';
import { Site } from './site/site';
import { Dashboard } from './dashboard/dashboard';
import { UploadApp } from './dashboard/Upload/upload';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Site />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/upload" element={<UploadApp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/change-password' element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
