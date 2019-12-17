import React from 'react'

import { Button } from './styles'

export const SubmitButton = ({ children, onClick, disabled }) => (
  <Button disabled={disabled} onClick={onClick}>{children}</Button>
)
