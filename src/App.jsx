import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Home } from './Home';
import { useEffect } from 'react';
import bannerImage from './assets/Images/banner.jpg';

function App() {
  const location = useLocation();
  
  useEffect(() => {
    // Check if the current route is Sign In or Sign Up
    if (location.pathname === '/' || location.pathname === '/sing-up') {
      document.body.style.background = `url(${bannerImage}) no-repeat` ;
      document.body.style.height = '100%';
      document.body.style.filter = 'brightness(100%)';
    } else {
      // Remove the background for other pages
      document.body.style.background = 'none';
      document.body.style.height = 'auto';
      document.body.style.filter = 'none';
    }

    // Cleanup to prevent memory leaks
    return () => {
      document.body.style.background = 'none';
      document.body.style.height = 'auto';
      document.body.style.filter = 'none';
    };
  }, [location]);

  return (
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sing-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
  );
}

export default App;
