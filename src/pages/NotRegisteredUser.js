import React from 'react'

import Context from '../Context'

import { UserForm } from '../components/UserForm'

import { RegisterMutation } from '../containers/RegisterMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => (
        <>
          <RegisterMutation>
            {
              (register, { loading, error, data }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(activateAuth)
                }
                const errorMsg = error && 'User already exists'

                return <UserForm error={errorMsg} disabled={loading} onSubmit={onSubmit} title='Sign up' />
              }
            }
          </RegisterMutation>
          {/* <UserForm onSubmit={onSubmit} title='Log in' /> */}
        </>
      )
    }
  </Context.Consumer>
)
