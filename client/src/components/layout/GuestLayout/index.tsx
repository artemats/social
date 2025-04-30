import { Outlet } from 'react-router-dom'

const GuestLayout = () => {
  return (
    <div className="flex">
      <div className="flex-1 min-h-[100dvh] h-full bg-gray-100">
        {/*<img*/}
        {/*  src="https://images.unsplash.com/photo-1494386346843-e12284507169?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"*/}
        {/*  alt="LinkUp Authentification"*/}
        {/*  style={{*/}
        {/*    width: '100%',*/}
        {/*    height: '100%',*/}
        {/*    objectFit: 'cover',*/}
        {/*    objectPosition: 'center',*/}
        {/*  }}*/}
        {/*/>*/}
      </div>
      <div className="flex-1 flex flex-col justify-center p-24">
        <div className="margin-y-auto max-w-md">
          <h1 className="font-bold text-4xl mb-1">LinkUp</h1>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default GuestLayout
