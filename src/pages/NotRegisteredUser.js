import React from 'react'

import Context from '../Context'

import { UserForm } from '../components/UserForm'

import { RegisterMutation } from '../containers/RegisterMutation'
import { LoginMutation } from '../containers/LoginMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => (
        <>
          <RegisterMutation>
            {
              (register, { loading, error }) => {
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
          <LoginMutation>
            {
              (login, { loading, error }) => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  login({ variables }).then(activateAuth)
                }
                const errorMsg = error && 'Wrong email or password'

                return <UserForm error={errorMsg} disabled={loading} onSubmit={onSubmit} title='Log in' />
              }
            }
          </LoginMutation>
        </>
      )
    }
  </Context.Consumer>
)
