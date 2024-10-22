import React from 'react'

import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const Login = gql`
    mutation login($input: UserCredentials!) {
        login (input: $input)
    }
`

export const LoginMutation = ({ children }) => (
  <Mutation mutation={Login}>
    {children}
  </Mutation>
)
