import Link from 'next/link'
import React from 'react'

const fetchUser = async () =>{
    try {
        const apiResponse = await fetch('http://dummyjson.com/users')
        const result = await apiResponse.json()
        return result.users
    } catch (error) {
        throw new Error(error)
    }
}

const ServerSidedataFetching =async () => {
    const usersdata = await fetchUser()
    console.log(usersdata)
  return (
    <div>
    <h1 className='font-bold text-2xl m-4'>Server side data fetching : user list page</h1>
      <ul className='grid grid-cols-6 gap-2 p-10'>
        {usersdata && usersdata.length > 0 ?
        usersdata.map((user,index)=>(
          <Link href={`/server-data-fetch/${user.id}`} >
            {user.firstName}
          </Link>
        ))
        :null
        }
      </ul>
    </div>
  )
}

export default ServerSidedataFetching
