import classNames from 'classnames'
import { usePosts } from 'src/features/user/hooks/usePosts'
import Post from 'src/components/shared/Post'

const PostsWidget = ({ className }: { className?: string }) => {
  const { data: posts = [], isPending } = usePosts()

  console.log('PostsWidget, isPending ', isPending)
  console.log('PostsWidget, data ', posts)

  return (
    <div className={classNames('space-y-4', className)}>
      {posts.length > 0
        ? posts.map((post) => <Post data={post} key={post._id} />)
        : null}
    </div>
  )
}

export default PostsWidget
