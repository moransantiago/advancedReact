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
              register => {
                const onSubmit = ({ email, password }) => {
                  const input = { email, password }
                  const variables = { input }
                  register({ variables }).then(activateAuth()).catch(err => console.log(err))
                }

                return <UserForm onSubmit={onSubmit} title='Sign up' />
              }
            }
          </RegisterMutation>
          {/* <UserForm onSubmit={onSubmit} title='Log in' /> */}
        </>
      )
    }
  </Context.Consumer>
)
