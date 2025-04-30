import { Input } from 'src/components/ui/input'
import { Search } from 'lucide-react'

const SearchForm = () => {
  return (
    <form>
      <div className="relative">
        <Search className="absolute left-5 top-[50%] -translate-1/2 w-5 h-5 text-grey-500 pointer-events-none text-gray-500" />
        <Input placeholder="Search..." className="pl-10" />
      </div>
    </form>
  )
}

export default SearchForm
