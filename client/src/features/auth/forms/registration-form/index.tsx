import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from 'src/components/ui/input'
import { RegisterUserProps } from 'src/features/auth/types'
import { RegistrationSchema } from 'src/features/auth/forms/registration-form/schema'
import { Button } from 'src/components/ui/button'

const RegistrationForm = ({
  onSubmit,
}: {
  onSubmit: (data: RegisterUserProps) => void
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterUserProps>({ resolver: zodResolver(RegistrationSchema) })

  console.log('Registration Form, errors ', errors)

  return (
    <form
      className="flex flex-col gap-4 py-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          {...register('firstName')}
          className="h-10"
          placeholder="First name"
        />
        {errors.firstName?.message ? (
          <p className="text-sm text-red-400">{errors.firstName.message}</p>
        ) : null}
      </div>
      <div>
        <Input
          {...register('lastName')}
          className="h-10"
          placeholder="Last name"
        />
        {errors.lastName?.message ? (
          <p className="text-sm text-red-400">{errors.lastName.message}</p>
        ) : null}
      </div>
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
      <Button className="h-10">Create account</Button>
    </form>
  )
}

export default RegistrationForm
