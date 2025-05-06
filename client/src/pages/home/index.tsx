import UserWidget from 'src/components/UserWidget'
import PostsWidget from 'src/components/Posts'

const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-4 py-4">
      <div>
        <UserWidget className="sticky top-4" />
      </div>
      <div className="col-span-2">
        <PostsWidget />
      </div>
      <div>
        <div className="sticky top-4">Friends widget</div>
      </div>
    </div>
  )
}

export default HomePage
