const HomePage = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-2 py-4">
      <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl h-[300px]">
        User widget
      </div>
      <div className="col-span-2">Posts</div>
      <div className="">Friends widget</div>
    </div>
  )
}

export default HomePage
