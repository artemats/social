import { IPost } from 'src/types'
import { Avatar, AvatarFallback, AvatarImage } from 'src/components/ui/avatar'
import WidgetWrapper from 'src/components/ui/WidgetWrapper'
import { Heart, MessageSquareText } from 'lucide-react'
import { Link } from 'react-router-dom'

const Post = ({ data }: { data: IPost }) => {
  console.log('Post, data ', data)
  return (
    <WidgetWrapper>
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12 min-w-12">
          <AvatarImage src={data.picturePath} />
          <AvatarFallback className="bg-zinc-300 dark:bg-zinc-700 user-select-none">
            {data.author.firstName.split('')[0] +
              data.author.lastName.split('')[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <Link to={`/profile/${data.author.id}`} className="text-md font-bold">
            {data.author.firstName} {data.author.lastName}
          </Link>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-none">
            {data.author.location}
          </p>
        </div>
      </div>
      <div className="py-2">
        <p>{data.description}</p>
      </div>
      <div className="min-h-[350px] bg-muted overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1549737525-45c81177eef7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={`${data.author.firstName} ${data.author.lastName}`}
          className="object-cover object-center"
        />
      </div>
      <div className="flex items-center gap-9 pt-4">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5" />
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {data.likes.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MessageSquareText className="w-5 h-5" />
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {data.comments.length}
          </span>
        </div>
      </div>
    </WidgetWrapper>
  )
}

export default Post
