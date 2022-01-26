import React from 'react';

export default function LoginForm() {
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <div>
        <input type="checkbox" id="remember" name="remember" />
        <label htmlFor="remember">Remember me?</label>
      </div>
      <button>Sign in</button>
    </form>
  )
}
