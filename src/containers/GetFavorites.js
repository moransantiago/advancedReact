import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import { ListOfFavs } from '../components/ListOfFavs'

const getFavs = gql`
    query getFavs {
        favs {
            id
            categoryId
            src
            likes
            userId
        }
    }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>

  const { favs } = data
  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => {
  return (
    <Query query={getFavs} fetchPolicy='network-only'>
      {renderProp}
    </Query>
  )
}
