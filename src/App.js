import './App.css';
import { Routes, Route } from 'react-router-dom' ;
import Home from './components/Home';
import SearchAppBar from './components/SearchAppBar';
import Login from './components/Login';
import Signup from './components/Signup';
import Users from './components/Users';
import UsersList from './components/UsersList';
import { useState, useEffect } from 'react';
import ListDividers from './components/ListDividers';
import Companies from './components/Companies';
import MyProfile from './components/MyProfile';
import Questions from './components/Questions';
import * as dotenv from 'dotenv';

function App() {
    const [users, setUsers] = useState([]);
    const API = process.env.API

    useEffect(()=>{
        fetch(`${API}/users`)
        // .then(console.log("fetched"))
        // .then((data)=> data.json)
        // .then((data)=> console.log(data, "data fetched successfully"))
        .then(function(response){
          response.json()
          .then(function(data) {
              setUsers(data);
          })
        // .then ((mv)=>console.log(mv))
        .catch((err)=> console.error(err));
     
        }
        )
     },[])
 
  return <div className='mainapp'>
        <SearchAppBar/>
        <div className='sidebar'>
            <ListDividers/>
            
            {/* <MyProfile/> */}
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/users/login' element={<Login/>} />
                <Route path='/users/signup' element={<Signup users={users} setUsers={setUsers}/>} />
                <Route path='*' element={<Home/>} />
                <Route path='/users' element={<UsersList usersList={users}/>}/>
                <Route path='/companies' element={<Companies/>}/>
                <Route path='/users/myprofile' element={<MyProfile/>}/>
                <Route path='/questions' element={<Questions/>}/>
            </Routes>
        </div>
    </div>

}


 // const mobiles = [{
  //   "model": "OnePlus 9 5G",
  //   "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
  //   "company": "Oneplus"
  //   },
  //   {
  //   "model": "Iphone 13 mini",
  //   "img": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
  //   "company": "Apple"
  //   },
  //   {
  //   "model": "Samsung s21 ultra",
  //   "img": "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
  //   "company": "Samsung"
  //   },
  //   {
  //   "model": "Xiomi mi 11",
  //   "img": "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
  //   "company": "Xiomi"
  //   }
  //   ]

   // <div className='App'>
    //   <div className='phone-list-container'>
    //     { mobiles.map((n)=> <Phone details= {n}/>)}
    //   </div>
    // </div>

// function Phone({details}){
//   // const details = {
//   //   "model": "OnePlus 9 5G",
//   //   "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
//   //   "company": "Oneplus"
//   //   }
//     return(
//       <div className='phone-container'>
//       <img className='phone-picture' src={details.img} alt="mobile-pic"/>
//       <h1 className='phone-name'>{details.model}</h1>
//       <h3 className='phone-company'>{details.company}</h3>
//       </div>
// )
// }
export default App;
