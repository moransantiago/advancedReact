import React from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'

export const Home = ({ id }) => (
  <>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </>
)
