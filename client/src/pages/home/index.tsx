import UserWidget from 'src/features/user/widgets/UserWidget'
import PostsWidget from 'src/features/user/widgets/PostsWidget'

const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-4 py-4">
      <UserWidget />
      <PostsWidget className="col-span-2" />
      {/*<div className="">Friends widget</div>*/}
    </div>
  )
}

export default HomePage
