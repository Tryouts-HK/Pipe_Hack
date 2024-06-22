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
import { AdminSignIn } from './auth/main/adminsign';
import { SRVSignIn } from './auth/main/srv';
import { SRVSignUp } from './auth/main/srvup';
import { AdminSignUp } from './auth/main/adminup';
import ProtectedRoute from './protected';
import { Settings } from './dashboard/Settings/settings';


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
        <Route path='/login/admin' element={<AdminSignIn />} />
        <Route path='/login/srv' element={<SRVSignIn />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/register/admin' element={<AdminSignUp />} />
        <Route path='/register/srv' element={<SRVSignUp />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/change-password' element={<ChangePassword />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<ProtectedRoute element={<Home />} />} />
          <Route path="monitor" element={<ProtectedRoute element={<Monitor />} />} />
            <Route path="results" element={<ProtectedRoute element={<Results />} />} />
            <Route path="upload" element={<ProtectedRoute element={<UploadApp />} />} />
            <Route path="messages" element={<ProtectedRoute element={<Messaging />} />} />
            <Route path="complaints" element={<ProtectedRoute element={<Complaints />} />} />
            <Route path="groups" element={<ProtectedRoute element={<Groups />} />} />
            <Route path="settings" element={<ProtectedRoute element={<Settings />} />} >
              {/* <Route path="privacy" element={<ProtectedRoute element={<Prof />} />} /> */}
              {/* <Route path="security" element={<ProtectedRoute element={<Settings />} />} /> */}
              {/* <Route path="notifications" element={<ProtectedRoute element={<NotificationController />} />} /> */}
              {/* <Route path="help" element={<ProtectedRoute element={<Settings />} />} /> */}
              {/* <Route path="contact" element={<ProtectedRoute element={<Settings />} />} /> */}
              {/* <Route path="privacy" element={<ProtectedRoute element={<Settings />} />} /> */}
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
