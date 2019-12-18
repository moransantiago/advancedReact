import React from 'react'

import { Layout } from '../components/Layout'

import { FavsWithQuery } from '../containers/GetFavorites'

export const Favs = () => (
  <Layout title='Your favorites' subtitle='Here you can find your favorite posts'>
    <FavsWithQuery />
  </Layout>
)
