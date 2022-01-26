import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

// api


// Styles & Components
import { Group, Input, Label } from '../../styles/Form.styled';
import Button from '../../components/Button';

export default function LoginForm() {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  });

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Group>
        <Label htmlFor="email">Email</Label>
        <Input {...register('email')} type="email" id="email" name="email" />
      </Group>
      <Group>
        <Label htmlFor="password">Password</Label>
        <Input {...register('password')} type="password" id="password" name="password" />
      </Group>
      <Group>
        <input {...register('remember')} type="checkbox" id="remember" name="remember" />
        <label htmlFor="remember">Remember me?</label>
      </Group>
      <Group>
        <Button disabled={isSubmitting}>Sign in</Button>
      </Group>
    </form>
  )
}
