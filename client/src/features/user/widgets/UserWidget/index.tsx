import { useUser } from 'src/features/user/hooks/useUser'
import { Skeleton } from 'src/components/ui/skeleton'
import { Fragment } from 'react'
import { MapPinCheckInside, BriefcaseBusiness } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
import WidgetWrapper from 'src/components/ui/WidgetWrapper'

const UserWidget = ({ className }: { className?: string }) => {
  const { data, isPending } = useUser()
  return (
    <WidgetWrapper className={className}>
      {isPending || !data ? (
        <Fragment>
          <div className="flex items-center gap-4 h-auto">
            <Skeleton className="h-14 w-14 min-w-14 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          </div>
          <div className="h-[1px] bg-zinc-100 dark:bg-zinc-800 my-4" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="h-[1px] bg-zinc-100 dark:bg-zinc-800 my-4" />
          <div className="space-y-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14 min-w-14">
              <AvatarImage src={data.picturePath} />
              <AvatarFallback className="bg-zinc-300 dark:bg-zinc-700 user-select-none">
                {data.firstName.split('')[0] + data.lastName.split('')[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-bold">
                {data.firstName} {data.lastName}
              </p>
              <p className="text-sm">{data.friends.length} friends</p>
            </div>
          </div>
          <div className="h-[1px] bg-zinc-100 dark:bg-zinc-800 my-4" />
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <MapPinCheckInside className="w-5 h-5" />
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                {data.location}
              </p>
            </li>
            <li className="flex items-center gap-2">
              <BriefcaseBusiness className="w-5 h-5" />
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                {data.occupation}
              </p>
            </li>
          </ul>
          <div className="h-[1px] bg-zinc-100 dark:bg-zinc-800 my-4" />
          <ul className="space-y-1">
            <li className="flex justify-between">
              <span className="text-zinc-500 dark:text-zinc-400 text-sm">
                Viewed your profile:
              </span>{' '}
              {data.viewedProfile}
            </li>
            <li className="flex justify-between">
              <span className="text-zinc-500 dark:text-zinc-400 text-sm">
                Impressions of your posts:
              </span>{' '}
              {data.impressions}
            </li>
          </ul>
        </Fragment>
      )}
    </WidgetWrapper>
  )
}

export default UserWidget
