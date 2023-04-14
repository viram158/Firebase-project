import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
let getData =()=>{
    let data = localStorage.getItem('Hello');
    if(data){
        return JSON.parse(data);
    }else{
        return [];
    }
    }
    export default function Login() {
    const [Data,setdata]=useState(getData());
  const [email,setemail]=useState();
  const [pass,setpass]=useState();
  const navigate=useNavigate()

  let bh=()=>{
    navigate('/')
  }
  let handSub=(e)=>{
  e.preventDefault();
  const prev = {
    email , pass
  }
  setdata((p)=>[...p,prev])
  }

  useEffect(()=>{
    localStorage.setItem('Hello',JSON.stringify(Data))
  },[Data])
  return (
    <div>
      <form className='container col-3' onSubmit={handSub}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<button onClick={bh}>LOGOUT</button>
    </div>
  )
}
