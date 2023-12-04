import React from 'react'
import { GlobalContext } from './context/userContext'
import Card from './Components/Card';
import Search from './Components/Search';
import Filters from './Components/Filters';
import CreateTeam from './Components/CreateTeam';
const App = () => {
  const {user,page,moveBack,moveForward,displayuser,nbPage}=GlobalContext();
  
  return (
    <>
    <Search/>
    <CreateTeam/>
    <Filters/>
      {
        (displayuser!==undefined)?
       <Card items={displayuser} heading="Users"/>:''
      }
      <div style={{display:"flex",justifyContent:"center",margin:"2rem 0"}}>
        <button onClick={moveBack}>Prev</button>
        <p>{page}of{nbPage}</p>
        <button onClick={moveForward}>Next</button>
      </div>
  </>
  )
}

export default App
