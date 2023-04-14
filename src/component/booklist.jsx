import React, { useEffect, useState } from 'react'
import BookDataService from '../firebase/Bookservices'
export default function Booklist({getBookId}) {
    const [books ,  setbooks]= useState([]);
    useEffect(()=>{
        getBooks();
    },[]);

    const getBooks = async ()=>{
        const data = await BookDataService.getAllbooks();
        // console.log(data.docs);
        setbooks(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
    }

    const deletehandler = async (id) =>{
        await BookDataService.deleteBooks(id);
        getBooks()
      } 

  return (
    <>
    <div className='container'>
      <button className='btn btn-dark' onClick={getBooks}>Refresh LIst</button>
    </div>
    <div className='container'>
     <table className='table table-bordered  table-hover' aria-colspan="8">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Book Title</th>
                <th scope="col">Book Author</th>
                <th scope="col"> Status</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {books.map((doc , index)=>{
                return (
              <tr>
                <th scope='row'>
                    {index + 1}
                </th>
                <td>{doc.title}</td>
                <td>{doc.author}</td>
                <td>{doc.status}</td>
                <td>
                    <button className='edit btn btn-success' onClick={(e)=>{getBookId(doc.id)}}>Edit</button>
                    <button className='btn btn-danger' onClick={(e)=>{deletehandler(doc.id)}}>Delete</button>
                </td>
              </tr>
                )
            })}
        </tbody>
     </table>
            </div>
    
        </>
  )
}
