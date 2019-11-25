import React from 'react'

import { Category } from '../Category/index'

import { List, Item } from './styles'

import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
  return (
    <List>
      {
        categories.map(category =>
          <Item key={category.id}>
            <Category
              {...category}// <-- The rest operator passes all the categories of the passed object
            />
          </Item>)
      }
    </List>
  )
}
