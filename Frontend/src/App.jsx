import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import LogIn from './LogInPage.jsx'
import SignIn from './SignUpPage.jsx'
import UserHomePage from './UserHomePage.jsx';
import Map from './Map.jsx';
import ServiceBooking from './ServiceBooking.jsx';
import PartnerRegistrationPage from './partnerRegisteration.jsx';
import FetchPartnerLocation from './FetchPartnerLocation.jsx';







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
