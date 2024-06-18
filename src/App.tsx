import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from './notfound';
import { SignIn } from './auth/main/signin';
import { SignUp } from './auth/main/signup';
import { ResetPassword } from './auth/main/resetPassword';
import { ForgotPassword } from './auth/main/forgotPassword';
import { ChangePassword } from './auth/main/changePassword';
import { Site } from './site/site';
import { UploadApp } from './dashboard/Upload/upload';
import Layout from './dashboard/layout';
import { Monitor } from './dashboard/Monitor/monitor';
import { Messaging } from './dashboard/Messages/messaging';
import { Groups } from './dashboard/Groups/groups';
import { Complaints } from './dashboard/Complaints/complaints';
import { Results } from './dashboard/Results/results';
import { Home } from './dashboard/Home/home';


function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Site />} />
    //     <Route path="*" element={<NotFound />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     <Route path="/dashboard/upload" element={<UploadApp />} />
    //     <Route path='/login' element={<SignIn />} />
    //     <Route path='/register' element={<SignUp />} />
    //     <Route path='/reset-password' element={<ResetPassword />} />
    //     <Route path='/forgot-password' element={<ForgotPassword />} />
    //     <Route path='/change-password' element={<ChangePassword />} />
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Site />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/change-password' element={<ChangePassword />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="monitor" element={<Monitor />} />
          <Route path="results" element={<Results />} />
          <Route path="upload" element={<UploadApp />} />
          <Route path="messages" element={<Messaging />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="groups" element={<Groups />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
