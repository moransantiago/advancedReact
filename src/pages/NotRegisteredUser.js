import React from 'react'

import Context from '../Context'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <form onSubmit={activateAuth}>
            <button>Log in</button>
          </form>
        )
      }
    }
  </Context.Consumer>
)
