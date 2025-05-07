import { useParams } from 'react-router-dom'
import ProfileData from 'src/components/ProfileData'
import { useUser } from 'src/features/user/hooks/useUser'

const ProfilePage = () => {
  const { userId } = useParams()
  const { data } = useUser(userId!)

  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-4 py-4">
      <div className="col-span-4">
        <ProfileData data={data} />
      </div>
      <div className="col-span-2 col-start-2">Posts widget</div>
    </div>
  )
}

export default ProfilePage
