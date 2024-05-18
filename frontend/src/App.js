import { Route, Routes } from 'react-router-dom';
import './App.css';
import providerDashboard from './pages/serviceProviderDashboard';
import ProfilePage from './pages/ProfilePage';
import SignIn from './pages/Sign';
import SignUp from './pages/Sigup';

function App() {
  return (
    <div className="App">
      <Routes>
    <Route path="/" element={<providerDashboard />} />
    <Route path="/profilepage" element={<ProfilePage />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signup" element={<userDashboard />} />
    </Routes>
    </div>
  );
}

export default App;
