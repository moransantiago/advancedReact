import React from 'react'

import { Layout } from '../components/Layout'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'

const HomePage = ({ id }) => (
  <Layout title='Your pets social media' subtitle='With Petgram you can find beautiful pictures about cute pets'>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Layout>
)

export const Home = React.memo(HomePage, (prevProps, props) => prevProps.categoryId === props.id)
