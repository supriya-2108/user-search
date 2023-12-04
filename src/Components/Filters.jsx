import React from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context/userContext';
const Filters = () => {
  const domain=["Sales","Finance","Marketing","IT","Management","UI Designing","All"];
  const {domainFilter,genderFilter,availabilityFilter}=GlobalContext();
  return (
    <>  
        <Div>
        <div>Filter By:</div>
            <div>
            <label>Domain</label><select onChange={domainFilter}>
                {
                  domain.map((item)=><option value={item}>{item}</option>)
                }
              </select>
            </div>
            <div>
            <label>Gender</label><select onChange={genderFilter}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="All">All</option>
              </select>
            </div>
            <div>
            <label>Availability</label><select onChange={availabilityFilter}>
                <option value={true}>true</option>
                <option value={false}>false</option>
                <option value="All">All</option>
              </select>
            </div>
        </Div>
    </>
  )
}
const Div=styled.div`
display:flex;
justify-content:right;
margin:0 1rem 2rem 0;

div{
    margin:1rem;
}
`
export default Filters
