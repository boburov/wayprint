import React from 'react'

const page = () => {
  return (
    <div className='container'>
      <form action="" className='flex flex-col gap-3 w-1/2'>
        <h1 className='text-4xl releway-ex'>{`Ro'yxatdan o'tish`}</h1>
        <input className='border border-white/30 px-4 py-3 rounded-md bg-white/40' autoComplete='off' required type="text" placeholder='name' />
        <input className='border border-white/30 px-4 py-3 rounded-md bg-white/40' autoComplete='off' required type="text" placeholder='surname' />
        <input className='border border-white/30 px-4 py-3 rounded-md bg-white/40' autoComplete='off' required type="email" placeholder='email' />
        <input className='border border-white/30 px-4 py-3 rounded-md bg-white/40' autoComplete='off' required type="password" placeholder='password' />
        <input className='border border-white/30 px-4 py-3 rounded-md bg-white/40' autoComplete='off' required type="password" placeholder='confirm password' />
        <button className='w-full py-3 bg-[#536451] text-white rounded-md'>{`Ro'yxatdan o'tish`}</button>
     </form>
    </div>
  )
}

export default page