import WidgetWrapper from 'src/components/ui/WidgetWrapper'
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
import { Button } from 'src/components/ui/button'
import {
  BriefcaseBusiness,
  MapPinCheckInside,
  Pencil,
  UserPlus,
} from 'lucide-react'
import { IUser } from 'src/types'
import { Fragment } from 'react/jsx-runtime'
import { Skeleton } from '../ui/skeleton'
import { useUserStore } from 'src/store/useUserStore'

type ProfileDataProps = {
  className?: string
  data?: IUser
}

const ProfileData = ({ className, data }: ProfileDataProps) => {
  const user = useUserStore((state) => state.user)
  console.log('ProfileData, data ', data)

  return (
    <WidgetWrapper className={className}>
      {data ? (
        <Fragment>
          <div className="relative">
            <div className="flex items-center gap-4">
              <Avatar className="h-44 w-44 min-w-44">
                <AvatarImage src={data.picturePath} />
                <AvatarFallback className="bg-zinc-300 dark:bg-zinc-700 user-select-none text-xl">
                  {data.firstName.split('')[0] + data.lastName.split('')[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-3xl font-bold">
                  {data.firstName} {data.lastName}
                </p>
                <p className="text-lg">{data.email}</p>
              </div>
            </div>
            {user?._id === data._id ? (
              <Button
                className="cursor-pointer absolute top-0 right-0"
                size="lg"
              >
                <Pencil />
                Edit profile
              </Button>
            ) : (
              <Button
                className="cursor-pointer absolute top-0 right-0"
                size="lg"
              >
                <UserPlus />
                Add to friends
              </Button>
            )}
          </div>
          <ul className="flex justify-end gap-8">
            <li className="flex items-center gap-2">
              <BriefcaseBusiness className="w-5 h-5" />
              <p className="text-zinc-500 dark:text-zinc-400">
                {data.occupation}
              </p>
            </li>
            <li className="flex items-center gap-2">
              <MapPinCheckInside className="w-5 h-5" />
              <p className="text-zinc-500 dark:text-zinc-400">
                {data.location}
              </p>
            </li>
          </ul>
        </Fragment>
      ) : (
        <Fragment>
          <div className="relative">
            <div className="flex items-center gap-4 h-auto">
              <Skeleton className="h-44 w-44 min-w-44 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
            <Skeleton className="absolute top-0 right-0 w-[100px] h-[42px]" />
          </div>
          <div className="flex justify-end gap-8">
            <Skeleton className="h-6 w-[150px]" />
            <Skeleton className="h-6 w-[150px]" />
          </div>
        </Fragment>
      )}
    </WidgetWrapper>
  )
}

export default ProfileData
