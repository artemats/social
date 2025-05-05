// import SearchForm from 'src/components/forms/search-form'
import { Avatar, AvatarImage, AvatarFallback } from 'src/components/ui/avatar'
import { Button } from 'src/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'src/components/ui/dropdown-menu'
import { Bell, MessageSquareText } from 'lucide-react'
import ColorModeSwitcher from 'src/components/shared/ColorModeSwitcher'
import { useUserStore } from 'src/store/useUserStore'
import { Link } from 'react-router-dom'

const Header = () => {
  const setLogout = useUserStore((state) => state.setLogout)
  const user = useUserStore((state) => state.user)
  console.log('Header, user ', user)
  console.log('Header')
  return (
    <nav className="bg-gray-50 border-gray-200 dark:bg-zinc-900 py-2">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-bold text-2xl">
            LinkUp
          </Link>
          {/*<SearchForm />*/}
          {user !== null ? (
            <div className="flex items-center gap-2">
              <ColorModeSwitcher />
              <Button variant="ghost" className="cursor-pointer p-3" asChild>
                <MessageSquareText className="w-11 h-11" />
              </Button>
              <Button variant="ghost" className="cursor-pointer p-3" asChild>
                <Bell className="w-11 h-11" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user.picturePath} />
                    <AvatarFallback className="bg-gray-300 dark:bg-zinc-700 user-select-none">
                      {user.firstName.split('')[0] + user.lastName.split('')[0]}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={setLogout}
                    className="cursor-pointer"
                  >
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  )
}

export default Header
