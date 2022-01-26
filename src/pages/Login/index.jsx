import React from 'react';
import LoginForm from '../../forms/Login';
import { Wrapper, Heading, FormFooter } from '../../styles/Form.styled';
import { StyledLink } from '../../styles/Link.styled';

export default function LoginPage() {
  return (
    <Wrapper>
      <Heading>Sign in</Heading>
      <LoginForm />
      <FormFooter>
        <StyledLink to="/">Forgot your password?</StyledLink>
        <p>Don't have an account? <StyledLink to="/">Sign up</StyledLink></p>
        <StyledLink to="/">Resend email confirmation</StyledLink>
      </FormFooter>
    </Wrapper>
  )
}
