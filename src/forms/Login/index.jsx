import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

// api
import { api, API_KEYS } from '../../api'

// Styles & Components
import { CheckboxLabel, ErrorMessage, Group, Input, Label } from '../../styles/Form.styled';
import Button from '../../components/Button';
import Loader from '../../components/Loader';

export default function LoginForm() {
  const [serverErrors, setServerErrors] = useState(null)
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  });

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Timeout to mock endpoint call and display loading states
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          await api.post(API_KEYS.LOGIN, data)
          resolve()
        } catch (error) {
          setServerErrors(error.message)
          reject()
        }
      }, 1500)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Group>
        <Label htmlFor="email">Email</Label>
        <Input {...register('email')} error={errors.email} type="email" id="email" name="email" />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </Group>
      <Group>
        <Label htmlFor="password">Password</Label>
        <Input {...register('password')} error={errors.password} type="password" id="password" name="password" />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
      </Group>
      <Group>
        <input {...register('remember')} type="checkbox" id="remember" name="remember" />
        <CheckboxLabel htmlFor="remember">Remember me?</CheckboxLabel>
      </Group>
      {serverErrors && (
        <Group>
          <ErrorMessage>{serverErrors}</ErrorMessage>
        </Group>
      )}
      <Group>
        <Button disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span>Submitting</span>
              <Loader />
            </>
          ) : (
            <span>Sign In</span>
          )}
        </Button>
      </Group>
    </form>
  )
}
