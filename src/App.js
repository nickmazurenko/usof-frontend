import React from 'react';
import { Flowbite } from 'flowbite-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { setAuthToken } from './features/auth/actions';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import useRoutes from './routes';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const { isAuthenticated } = useSelector((state) => {
    return state.auth;
  });
  const routes = useRoutes(isAuthenticated);

  return (
    <>
      <Flowbite
        theme={{
          dark: true,
        }}>
        <div>
          <ToastContainer />
          <Router>
            <Header />
            {routes}
            <Footer />
            <ScrollToTop/>
          </Router>
        </div>
      </Flowbite>
    </>
  );
};

export default App;
