import React from 'react'

import { Layout } from '../components/Layout'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'

export const Home = ({ id }) => (
  <Layout title="Your pet's social media" subtitle='With Petgram you can find beautiful pictures about cute pets'>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Layout>
)
