import React from 'react'

import { Layout } from '../components/Layout'

import { FavsWithQuery } from '../containers/GetFavorites'

export default () => (// <--This kind of export is because Favs is a dynamic import that will be loaded with Suspense
  <Layout title='Your favorites' subtitle='Here you can find your favorite posts'>
    <FavsWithQuery />
  </Layout>
)
