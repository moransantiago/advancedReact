import React from 'react'

import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const Register = gql`
    mutation signup($input: UserCredentials!) {
        signup (input : $input)
    }
`

export const RegisterMutation = ({ children }) => (
  <Mutation mutation={Register}>
    {children}
  </Mutation>
)
