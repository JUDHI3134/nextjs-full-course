import { redirect } from 'next/navigation';
import React from 'react'

const Account = () => {

    let userProgile = null;
    if(userProgile === null) redirect('blog?search=post1')

  return (
    <div>
      This is Account Page
    </div>
  )
}

export default Account
