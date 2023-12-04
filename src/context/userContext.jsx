// import { createContext, useEffect } from "react";
// import axios from 'axios'
// const AppContext=createContext();

import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from 'axios';
import api from '../heliverse_mock_data.json';
import reducer from "../reducers/reducer";
const initialState={
    page:1,
    user:[],
    displayuser:[],
    nbPage:16,
    team:[],
    startIndex:0,
    endIndex:5,
    buttonText:"Create Team",
    noOfPage:5,
    selected:[],
    finalTeam:[],
    show:"none",
    toggle:false,
    showTeamButtonText:"Display Team"
}

const AppContext=createContext();

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    const moveBack=()=>{
        dispatch({type:"MOVE_BACKWARD",payload:state.page})
        }

        const moveForward=()=>{
           dispatch({type:"MOVE_FORWARD",payload:state.page})
            }
    
    const getUser=async()=>{
        const len=api.length;
        try {
            dispatch({
              type: "GET_USERS",
              payload: {api,len}
            });
          } catch (error) {
            console.error("Error loading user data", error);
          }
        };
    
    const domainFilter=(event)=>{
        let val=event.target.value;
        dispatch({
          type:"Domain_Filter",
          payload:val
        });
        }
    
        const genderFilter=(event)=>{
          let val=event.target.value;
          dispatch({
            type:"Gender_Filter",
            payload:val
          })
        }

        const availabilityFilter=(event)=>{
          let val=event.target.value;
          dispatch({
            type:"Availability_Filter",
            payload:val
          })
      }   

    const SearchByName=(event)=>{
        let val=event.target.value;
        dispatch({
          type:"Search_By_Name",
          payload:val
        })
    }   
    const SelectTeam=()=>{
        dispatch({
          type:"Select_Team",
          
          
        })
    }

    const SelectMember=(item)=>{
      dispatch({
        type:"Selected_Member",
        payload:item
      })
    }

    const showTeam=()=>{
      dispatch({
        type:"Display_Team",
        
      })
    }
    useEffect(()=>{
        getUser();
    },[])
    return <AppContext.Provider value={{...state,moveBack,moveForward,showTeam,SearchByName,domainFilter,genderFilter,SelectMember,SelectTeam,availabilityFilter}}>{children}</AppContext.Provider>
}
const GlobalContext=()=>{
    return useContext(AppContext)
}

export {AppProvider,AppContext,GlobalContext}