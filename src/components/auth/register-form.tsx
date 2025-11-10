"use client"

import { signUp } from '@/lib/auth-client'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

function RegisterForm() {

    async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);

    const name = String(formData.get("name"));
    if (!name) return toast.error("Please enter your name");

    const email = String(formData.get("email"));
    if (!email) return toast.error("Please enter your email");

    const password = String(formData.get("password"));
    if (!password) return toast.error("Please enter your password");

    await signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onRequest: () => {},
        onResponse: () => {},
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {},
      }
    );
  }

  return (
    <form onSubmit={handleSubmit} className='max-w-sm w-full space-y-4'>
      <div className='space-y-2'>
        <Label htmlFor='name' className='text-sm font-medium'>
          Name
        </Label>
        <Input
          type='text'
          id='name'
          name='name'
          className='w-full px-4 py-2 border border-gray-300 rounded-md'
        />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='email' className='text-sm font-medium'>
          Email
        </Label>
        <Input
          type='email'
          id='email'
          name='email'
          className='w-full px-4 py-2 border border-gray-300 rounded-md'
        />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='password' className='text-sm font-medium'>
          Password
        </Label>
        <Input
          type='password'
          id='password'
          name='password'
          className='w-full px-4 py-2 border border-gray-300 rounded-md'
        />
      </div>
      <Button className='w-full' type='submit'>Register</Button>
    </form>
  )
}

export default RegisterForm