import React, { useState } from 'react'
let getData = () => {
    let data = localStorage.getItem('Hello');
    return JSON.parse(data);
  }
export default function Logon() {
    const [api,setapi]=useState(getData())
     const [em,setem]=useState()
     const [ps,setps]=useState()
     let submit=(e)=>{
        e.preventDefault();
        api.map((v,i)=>{
            if(v.email=== em && v.pass === ps){
                console.log('logined')
                return('');
            }else{
                console.log('error')
            }
        })
     }
  return (
    <div>
        <form className='form' onSubmit={submit} >
      <input type="text" value={em} onChange={(e)=>{setem(e.target.value)}}  />
      <input type="text" value={ps} onChange={(e)=>{setps(e.target.value)}} />
      <button type='submit'>Sub,it</button>
        </form>
    </div>
  )
}
