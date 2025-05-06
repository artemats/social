import ProfileForm from 'src/features/user/forms/profile-form'
import ProfileData from 'src/components/ProfileData'

const ProfilePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-4 py-4">
      <div className="col-span-4">
        <ProfileData />
      </div>
      <div>Statistics widget</div>
      <div className="col-span-2">Posts widget</div>
      {/*<ProfileForm />*/}
    </div>
  )
}

export default ProfilePage
