

"use client";
import React from 'react'

export default function variables() {
    const user={
        name:"shahroz",
        age:19,
        class:"BSCS"
    }
  return (
    <div className='mt-2'>
  My information
  <div> My name : {user.name}</div>
    </div>
  )
  
}
