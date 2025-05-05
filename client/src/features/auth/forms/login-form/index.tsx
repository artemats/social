import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginUserProps } from 'src/features/auth/types'
import { LoginSchema } from 'src/features/auth/forms/login-form/schema'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { LoaderCircle } from 'lucide-react'

type LoginFormProps = {
  onSubmit: (data: LoginUserProps) => void
  isPending?: boolean
}

const LoginForm = ({ onSubmit, isPending }: LoginFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginUserProps>({
    resolver: zodResolver(LoginSchema),
  })

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
      <Button className="h-10" disabled={isPending}>
        {isPending ? <LoaderCircle className="w-8 h-8 animate-spin" /> : null}
        Login
      </Button>
    </form>
  )
}

export default LoginForm
