import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import LogIn from './components/LogInPage.jsx'
import SignIn from './components/SignUpPage.jsx'
import UserHomePage from './components/UserHomePage.jsx';
import Map from './components/Map.jsx';
import ServiceBooking from './components/ServiceBooking.jsx';
import PartnerRegistrationPage from './components/PartnerRegisteration.jsx';
import FetchPartnerLocation from './components/FetchPartnerLocation.jsx';







const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/login',
    element: <LogIn />
  },

  {
    path: '/signin',
    element: <SignIn />
  },

  {
    path: '/user',
    element: <UserHomePage />
  },

  {
    path: '/map',
    element: <Map />
  },

  {
    path: '/book-ride',
    element: <ServiceBooking />
  },

  {
    path: '/register-as-partner',
    element: <PartnerRegistrationPage />
  },

  {
    path: '/register-as-partner-fetch-location',
    element: <FetchPartnerLocation/>
  }

  // {
  //   path: '/fair-estimate',
  //   element: <Fair-Estimate />
  // },


  // {
  //   path: '*',
  //   element: <PageNotFound />
  // }
]);

function App() {
  return (

    <RouterProvider router = {router} >
      <Navbar />
    </RouterProvider>
    
  )
}

export default App
