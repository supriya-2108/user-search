import React, { useState } from 'react'
import styled from 'styled-components';
import Pagination from "react-js-pagination";
import { GlobalContext } from '../context/userContext';
const Card = ({items}) => {
  const {show,selected,SelectMember,team,toggle,buttonText}=GlobalContext();
  return (
    <Div>
      {
        items.map((item)=>{
          return <div className='innerDiv'>
                    <button style={{display:show,backgroundColor:(team.includes(item.id)&&buttonText!=="Create Team")?"blue":"",color:(team.includes(item.id)&&toggle)?"white":"black"}} onClick={()=>SelectMember(item)}>Select</button>
                    <img src={item.avatar} alt="avatar"/>
                    <h3> Name : {item.first_name}{item.last_name}</h3>
                    <p>Email : {item.email}</p>
                    <p>Gender : {item.gender}</p>
                    <p>Domain: {item.domain}</p>
                    <p>Available: {item.available.toString()}</p>
                </div>
        })
      }
    </Div>
  )
}

const Div=styled.div`
display:grid;
grid-template-columns:repeat(4,1fr);
gap:1rem;
place-items:center;

.innerDiv{
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:15rem;
  align-items:center;
  border:0.5px solid #f1f1f1;
}
`
export default Card
