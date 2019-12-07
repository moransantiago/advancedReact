import React, { Fragment } from 'react'

import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

import { Logo } from './components/Logo'

import { GlobalStyle } from './components/styles/GlobalStyles'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)// <--Get each url param to a const
  const detailId = urlParams.get('detail')// <--Get the exact params of the query: detail

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId}/>
          : <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={3} />
          </Fragment>
      }
    </div>
  )
}
