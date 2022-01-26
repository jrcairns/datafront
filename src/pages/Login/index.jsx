import React from 'react';
import LoginForm from '../../forms/Login';

export default function LoginPage() {
  return (
    <div>
      <div>
        <h1>Sign in</h1>
        <LoginForm />
        <div>
          <p>Forgot your password?</p>
          <p>Don't have an account? Sign up</p>
          <p>Resend email confirmation</p>
        </div>
      </div>
    </div>
  )
}
