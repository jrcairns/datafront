import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--color-white);
  padding: 2rem;
  border-top: 2px solid var(--color-green-500);
  max-width: 410px;
  width: 100%;
`

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.75rem;
  font-weight: var(--font-bold);
`

export const Group = styled.div`
  margin-bottom: 1rem;
`

export const Input = styled.input`
  border: 1px solid var(--color-gray-100);
  padding: 0.75rem 1rem;
  background-color: transparent;
  width: 100%;
`
export const Label = styled.label`
  font-weight: var(--font-semibold);
  display: block;
  margin-bottom: 0.125rem;
`