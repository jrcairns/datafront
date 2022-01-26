import React from 'react';

import { StyledButton } from './Button.styled'

export default function Button({ disabled, children }) {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
}
