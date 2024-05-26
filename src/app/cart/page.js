"use client"
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const Cart = () => {
    
    const pathName = usePathname()
    console.log(pathName)

    const searchParams = useSearchParams()
    console.log(searchParams.get('search'), searchParams.get('randomvalue'));
   

  return (
    <div>
      This is Cart Page
    </div>
  )
}

export default Cart
