
import './App.css';
import Form from './component/Form';
import Book from './component/booklist'
import { useState } from 'react';
import Nav from './authentication/Authen'
import Login from './authentication/Fir';
import Log from './authentication/Logon'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Home from './authentication/Home';


function App() {
  const [bookId,setBookId]=useState("");
  const getBookHandler = (id) =>{
    console.log("The ID of document to be edited:",id);
    setBookId(id);
  };
  return (
    <div className="">
      {/* <nav className="navbar d-flex justify-content-center align-items-center bg-black text-white">
        <h2>Library-Firebase CRUD</h2>
      </nav><br />
      <Form id={bookId} setBookId={setBookId}/>
      <Book getBookId={getBookHandler}/> */}
     {/* <Nav/> */}
      <BrowserRouter>
     
      
      <Routes>
        <Route path='/' element={<Nav/>}></Route>
        <Route path="/Login" element={<Log/>}></Route>

        <Route path='/Home' element={<Home/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
