import React from 'react'

function map() {
    const arr=[3,5,9,2,6];
    function double(x:any){
        return x*2;
    }
    function larger(y:any){
        return y>4;
    }
    const output=arr.map(double);
    const output1=arr.filter(larger);
  return (<>  <div>{output}</div>
  <div>{output1}</div></>
  
  )
}

export default map