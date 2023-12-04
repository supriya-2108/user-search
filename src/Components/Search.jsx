import React from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context/userContext'
const Search = () => {
    const {SearchByName}=GlobalContext();
  return (
    <Div>
      <input type="text" placeholder="Search" onChange={SearchByName}/>
      <button>Submit</button>
    </Div>
  )
}

const Div=styled.div`
    display:flex;
    justify-content:center;
    margin:2rem;

    input{
        border:0.5px solid #f1f1f1
    }
    button{
        background-color:green;
        height:2rem;
        color:white;
        margin-left:1rem;
        border:none;
    }
`

export default Search
