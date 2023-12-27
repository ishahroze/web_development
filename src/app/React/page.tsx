
"use client";
import React from 'react'
import { useState } from 'react'

export default function Pageusestate (){
    const [value,updatevalue]=useState<number>(10);

    const increment=()=>{
        updatevalue(value+1);
    }
    const decrement=()=>{
        updatevalue(value-1);
    }
  return (
    <div className='flex gap-5 px-5 py-7'>
        <button className="btn btn-info"  onClick={increment}>Increment</button>
        <p className="font-bold text-green-500 px-5 py-4.5">{value}</p>
        <button className="btn btn-info"  onClick={decrement}>decrement</button>
    </div>
  )
}