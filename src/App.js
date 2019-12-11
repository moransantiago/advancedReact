import React from 'react'

import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

import { Navbar } from './components/Navbar'
import { Logo } from './components/Logo'
import { GlobalStyle } from './components/styles/GlobalStyles'

const UserLogged = ({ children }) => children({ isAuth: false })

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <UserLogged>
        {
          ({ isAuth }) => {
            if (isAuth) {
              return (
                <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                </Router>
              )
            } else {
              return (
                <Router>
                  <NotRegisteredUser path='/favs' />
                  <NotRegisteredUser path='/user' />
                </Router>
              )
            }
          }
        }
      </UserLogged>
      <Navbar />
    </div>
  )
}
