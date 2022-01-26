import React from 'react';
import styled from 'styled-components'

export const LoaderStyled = styled.div`
  border: 2px solid var(--color-gray-100);
  border-top: 2px solid var(--color-gray-500);
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  animation: spin 1.7s linear infinite;
  margin-left: 0.5rem;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

export default function Loader() {
  return <LoaderStyled></LoaderStyled>
}
