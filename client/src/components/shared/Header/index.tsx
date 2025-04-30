import SearchForm from 'src/components/forms/search-form'
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
import { Bell, Sun, MessageSquareText } from 'lucide-react'

const Header = () => {
  console.log('Header')
  return (
    <nav className="bg-gray-50 border-gray-200 dark:bg-gray-900 py-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between">
          <p className="font-bold text-2xl">LinkUp</p>
          <SearchForm />
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="cursor-pointer p-3" asChild>
              <Sun className="w-11 h-11" />
            </Button>
            <Button variant="ghost" className="cursor-pointer p-3" asChild>
              <MessageSquareText className="w-11 h-11" />
            </Button>
            <Button variant="ghost" className="cursor-pointer p-3" asChild>
              <Bell className="w-11 h-11" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=600" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>email@gmail.com</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
