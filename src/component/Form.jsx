import React, { useEffect, useState } from 'react'
import BookDataService from '../firebase/Bookservices';
import './form.css'
export default function Form({id , setBookId}) {
  const [title,settitle]= useState();
  const [author , setauthor]= useState();
  const [status,setstatus]= useState("Available");
  const [message,setmsg]=useState({ error: false , msg:""});
  const [flag,setflag]=useState(true)

  const handlesubmit= async (e)=>{
   e.preventDefault();
   setmsg("");
   if(title === "" || author ===""){
    setmsg({error:true, msg:"All fields are mandatory!"});
    return;
   }
   const newBook ={
    title,
    author,
    status,
    flag
   };

   try{
    if(id !== undefined && id !==""){
      await BookDataService.updateBooks(id,newBook);
      setBookId("");
      setmsg({error:false , msg:"Updated successfully!"});
    } else{
      await BookDataService.addBooks(newBook);
      setmsg({error: false , msg:"New Book added successfully!"});
    }
   }
   catch(err){
    setmsg({error:true, msg: err.message})
   }
   settitle("");
   setauthor("");
  };

  const editHandler = async ()=>{
      setmsg("");
      try{
        const docSnap = await BookDataService.getBook(id);
        console.log("the record is:",docSnap.data());
        settitle(docSnap.data().title);
        setauthor(docSnap.data().author);
        setstatus(docSnap.data().status);
      } catch(err){
        setmsg({error:true , msg: err.message});
      }
  };
  useEffect(()=>{
    console.log("the id is here :",id);
    if(id !== undefined && id !== ""){
      editHandler();
    }
  },[id]);
  return (
    <div>
      
      {message?.msg && (
        <center>

        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                   {message?.msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
        </center>
          ) 
      }
      <form className='col-4 m-auto container' onSubmit={handlesubmit}>
      <div class="input-group flex-nowrap">
  <span class="input-group-text" style={{backgroundColor:'black',color:'#fff'}} id="addon-wrapping" >B</span>
  <input type="text" class="form-control" placeholder="Book Title" aria-label="Username" aria-describedby="addon-wrapping" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
</div><br />
<div class="input-group flex-nowrap">
  <span class="input-group-text" style={{backgroundColor:'black',color:'#fff'}} id="addon-wrapping">A</span>
  <input type="text" class="form-control" placeholder="Book Author" aria-label="Username" aria-describedby="addon-wrapping" value={author} onChange={(e)=>{setauthor(e.target.value)}}/>
</div><br />
<div className="btn-group">
     { flag ? setflag('green'):<><button  type="button" className="btn "  onClick={(e)=>{setstatus("Available")}}>Available</button>
      <button  type="button" className="btn "  onClick={(e)=>{setstatus("Not Available")}} >Not available</button> </>}

    </div><br /><br />
        <button  type='submit' className='btn btn-primary text-black'>ADD/UPDATE</button>
      </form>
    </div>
  )
}
