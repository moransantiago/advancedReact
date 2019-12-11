import React from 'react'

import { Home } from './pages/Home'

import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

import { Logo } from './components/Logo'
import { GlobalStyle } from './components/styles/GlobalStyles'

import { Router } from '@reach/router'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)// <--Get each url param to a const
  const detailId = urlParams.get('detail')// <--Get the exact params of the query: detail

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
          </Router>
      }
    </div>
  )
}
