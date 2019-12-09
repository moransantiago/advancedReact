import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const getPhotos = gql`
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`

export const withPhotos = graphql(getPhotos)// <--High orden component
