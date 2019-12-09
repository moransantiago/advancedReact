import React from 'react'

import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const likePhoto = gql`
    mutation likeAnonymousPhoto($input: LikePhoto!) {
        likeAnonymousPhoto(input: $input) {
            id,
            liked,
            likes
        }
    }
`

export const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={likePhoto}>
      {children}
    </Mutation>
  )
}
