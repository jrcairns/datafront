import React from 'react';
import LoginForm from '../../forms/Login';
import { Wrapper, Heading } from '../../styles/Form.styled';

export default function LoginPage() {
  return (
    <Wrapper>
      <Heading>Sign in</Heading>
      <LoginForm />
      <div>
        <p>Forgot your password?</p>
        <p>Don't have an account? Sign up</p>
        <p>Resend email confirmation</p>
      </div>
    </Wrapper>
  )
}
