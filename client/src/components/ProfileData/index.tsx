import { useUser } from 'src/features/user/hooks/useUser'
import WidgetWrapper from 'src/components/ui/WidgetWrapper'
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
import { Button } from 'src/components/ui/button'
import {
  BriefcaseBusiness,
  MapPinCheckInside,
  Pencil,
  UserPlus,
} from 'lucide-react'

const ProfileData = ({ className }: { className?: string }) => {
  const { data, isPending } = useUser()
  console.log('ProfileData, data ', data)
  console.log('ProfileData, is isPending', isPending)

  if (data) {
    return (
      <WidgetWrapper>
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
          {/*<Button className="cursor-pointer absolute top-0 right-0" size="lg">*/}
          {/*  <UserPlus />*/}
          {/*  Add to friends*/}
          {/*</Button>*/}
          <Button className="cursor-pointer absolute top-0 right-0" size="lg">
            <Pencil />
            Edit profile
          </Button>
        </div>
        <ul className="flex justify-end gap-8">
          <li className="flex items-center gap-2">
            <BriefcaseBusiness className="w-5 h-5" />
            <p className="text-zinc-500 dark:text-zinc-400">{data.occupation}</p>
          </li>
          <li className="flex items-center gap-2">
            <MapPinCheckInside className="w-5 h-5" />
            <p className="text-zinc-500 dark:text-zinc-400">{data.location}</p>
          </li>
        </ul>
      </WidgetWrapper>
    )
  }

  return null
}

export default ProfileData
