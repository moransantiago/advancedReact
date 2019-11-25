import React, { useState, useEffect } from 'react'

import { Category } from '../Category/index'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    window.fetch('https://petgram-server.midudev.now.sh/categories')
      .then(res => res.json())
      .then(res => {
        setCategories(res)
      })
  }, [])//  <-- I pass an empty array as a second parameter in order to this effect only when the component gets mounted

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
