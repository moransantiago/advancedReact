import React, { useState, useEffect } from 'react'

import { Category } from '../Category/index'

import { List, Item } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server.moransantiago.now.sh/categories')
      .then(res => res.json())
      .then(res => {
        setCategories(res)
        setLoading(false)
      })
  }, [])//  <-- I pass an empty array as a second parameter in order to this effect only when the component gets mounted

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 250
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = fixed => (
    <List
      fixed={fixed}
    >
      {
        categories.map(category =>
          <Item key={category.id}>
            <Category
              {...category}// <-- The rest operator passes all the categories of the passed object
              path={`/pet/${category.id}`}
            />
          </Item>)
      }
    </List>
  )

  if (loading) return 'Loading...'

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
