import React, { useContext } from 'react'

import { Context } from '../Context'

import { UserForm } from '../components/UserForm'

import { RegisterMutation } from '../containers/RegisterMutation'
import { LoginMutation } from '../containers/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {
          (register, { loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              })
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
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }
            const errorMsg = error && 'Wrong email or password'

            return <UserForm error={errorMsg} disabled={loading} onSubmit={onSubmit} title='Log in' />
          }
        }
      </LoginMutation>
    </>
  )
}
