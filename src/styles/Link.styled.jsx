import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  font-weight: var(--font-semibold);
  text-decoration: underline;
  color: var(--color-black);
  transition: 150ms ease;

  &:hover {
    color: var(--color-green-500);
  }
`