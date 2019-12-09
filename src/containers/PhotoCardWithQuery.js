import React from 'react'
import { PhotoCard } from '../components/PhotoCard/index'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const getSinglePhoto = gql`
    query getSinglePhoto($id: ID!){
        photo(id: $id){
            id
            categoryId
            src
            likes
            liked
            userId
        }
    }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  const { photo = {} } = data

  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={getSinglePhoto} variables={{ id }}>
    {renderProp}
  </Query>
)
