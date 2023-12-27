'use client'
import React from 'react'
import {useState} from 'react'
function todo() {
    const[value1,updatevalue1]=useState("")
    const[num,numupdate]=useState(0);
   const[list,setlist]=useState<string[]>([])
    function activity(){
      setlist((list)=>{
const updatelist=[...list,value1];
console.log(updatelist)
      return updatelist;
      })
      numupdate(num+1)
      updatevalue1('');
      
    }
    function deletelist(i){
      const deletedlist=list.filter((elem,id)=>{
        return i!=id
      })
      setlist(deletedlist)
    }
    function removeall(){
      setlist([])
    }
   
    
  return (
  <div className=" justify-center h-screen bg-gray-500">
    <div className="flex items-center justify-center mb-2 " >
     <div className="bg-black text-white w-25 pl-2 mt-2  pr-2.5 border rounded-lg border-white-500" >TODO LIST</div>
     </div>
     
     <div className="flex items-center mb-2 align-middle">
        <input
          className="input input-bordered border-gray-800 input-primary w-75% h-4px max-w-xs"
          type="text"
          value={value1}
          onChange={(e) => updatevalue1(e.target.value)}
          placeholder="Type your task"
        />
        <button className="btn btn-neutral ml-2 h-1 " onClick={activity}>
          Submit
        </button>
      </div>
    <br></br>
    {
      list.map((data,i)=>{
        return(
          <div key={i} className="bg-black text-white border border-white-500 p-2 mb-2 inline-block">
          <div>{data}<button className="btn btn-neutral ml-2 h-1 " onClick={()=>deletelist(i)}>
         Delete
        </button></div>
        </div>
        )
      })
      
    }
    {setlist.length>=1 && <button className="btn btn-neutral ml-2 h-1 " onClick={removeall}>
         Remove All
        </button>}
     
   </div>
  )
}

export default todo