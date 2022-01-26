import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components'

const StyledLayout = styled.div`
  background-color: var(--color-gray-100);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function AuthLayout() {
  return (
    <StyledLayout>
      <Outlet />
    </StyledLayout>
  )
}
