import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginUserProps } from 'src/features/auth/types'
import { LoginSchema } from 'src/features/auth/login-form/schema'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'

type LoginFormProps = {
  onSubmit: (data: LoginUserProps) => void
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginUserProps>({
    resolver: zodResolver(LoginSchema),
  })
  console.log('LoginForm, errors ', errors)
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 py-4"
    >
      <div>
        <Input {...register('email')} className="h-10" placeholder="Email" />
        {errors.email?.message ? (
          <p className="text-sm text-red-400">{errors.email.message}</p>
        ) : null}
      </div>
      <div>
        <Input
          {...register('password')}
          className="h-10"
          placeholder="Password"
          type="password"
        />
        {errors.password?.message ? (
          <p className="text-sm text-red-400">{errors.password.message}</p>
        ) : null}
      </div>
      <Button className="h-10">Login</Button>

      <p className="mt-10 text-center text-sm text-gray-500">
        Don’t you have an account?{' '}
        <Link
          to="/registration"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Sign up
        </Link>
      </p>
    </form>
  )
}

export default LoginForm
