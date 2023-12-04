import React, { useState } from 'react'
import { GlobalContext } from '../context/userContext'
import Card from './Card';
import styled from 'styled-components';
const CreateTeam = () => {
    const {SelectTeam,buttonText,toggle,showTeam,finalTeam,showTeamButtonText}=GlobalContext();
    
  return (
    <div>
      <button onClick={SelectTeam} style={{backgroundColor:(buttonText!=="Create Team")?"green":"",color:(buttonText!=="Create Team")?"white":"",marginLeft:"2rem"}}>{buttonText}</button>
      <button onClick={showTeam}>{showTeamButtonText}</button>
    
    {
        (finalTeam.length!==0&&showTeamButtonText!=="Display Team")?
        <>
        <h2 style={{textAlign:"center"}}>Selected Team</h2>
        <Div> {
                    finalTeam.map((item)=>{
                        return(
                            <div className='innerDiv'>
                                <img src={item.avatar} alt="avatar"/>
                                <h3> Name : {item.first_name}{item.last_name}</h3>
                                <p>Email : {item.email}</p>
                                <p>Gender : {item.gender}</p>
                                <p>Domain: {item.domain}</p>
                                <p>Available: {item.available.toString()}</p>
                            </div>
                        )
                    })}
                    </Div>
          </>      
            :""

        }
    

    </div>
  )
}
const Div=styled.div`
    
     display:flex;

.innerDiv{
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:15rem;
  align-items:center;
  border:0.5px solid #f1f1f1;
}
`
export default CreateTeam
