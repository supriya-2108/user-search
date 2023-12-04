// reducer.js
const reducer = (state, action) => {
    switch (action.type) {
      case "GET_USERS":
        return {
          ...state,
          user:action.payload.api,
          displayuser: action.payload.api.slice(0,5),
          nbPage: Math.ceil(action.payload.api.length / state.noOfPage)
        };

      case "MOVE_BACKWARD":
        const itemsPerPage = 5;
        if(state.page!==1){
        const startIndex = (state.page - 2) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        // Get the users to display for the current page
        const currentPageUsers = state.user.slice(startIndex, endIndex);
           return{
            ...state,
            displayuser:currentPageUsers,
            page:state.page-1
        }
    }else return{
        ...state,
        page:1
    }


      case "MOVE_FORWARD":
        const itemsPerPages = 5;
        if(state.page!==state.nbPage){
        const startIndex = (state.page - 1) * itemsPerPages+itemsPerPages;
        const endIndex = startIndex + itemsPerPages;
        // Get the users to display for the current page
        const currentPageUsers = state.user.slice(startIndex, endIndex);
           return{
            ...state,
            displayuser:currentPageUsers,
            page:state.page+1,
        }
    }else return{
        ...state,
        page:state.nbPage
    }

      case "Search_By_Name":
        let val=action.payload;
        let filterArr=[];
        const displayarraydummy=state.user.slice((state.page-1)*5,(state.page-1)*5+5);
        if (val.trim() === "") {
          filterArr = displayarraydummy;
        } else {
          filterArr = displayarraydummy.filter(
            (item) => item.first_name.toLowerCase().startsWith(val.toLowerCase())
          );
        }
        return {
          ...state,
          displayuser: filterArr,
        };

      case "Domain_Filter":
        let value=action.payload;
        const displayarraydummy1=state.user.slice((state.page-1)*5,(state.page-1)*5+5);
        let filterArray;
        if(value!=="All"){
        filterArray=displayarraydummy1.filter((item)=>item.domain.toLowerCase()===value.toLowerCase());
        }
        else{
        filterArray=displayarraydummy1;
        }
        return{
          ...state,
          displayuser:filterArray
        }
      
      case "Gender_Filter":
        let value1=action.payload;
        const displayarraydummy2=state.user.slice((state.page-1)*5,(state.page-1)*5+5);
        let filterArray2;
        if(value1!=="All"){
        filterArray2=displayarraydummy2.filter((item)=>item.gender===value1);
        }
        else{
        filterArray2=displayarraydummy2;
        }
        return{
          ...state,
          displayuser:filterArray2
        }

        case "Availability_Filter":
          let value2=action.payload;
          console.log(value2);
          const displayarraydummy3=state.user.slice((state.page-1)*5,(state.page-1)*5+5);
          let filterArray3;
          if(value2!=="All"){
          filterArray3=displayarraydummy3.filter((item)=>item.available.toString()===value2);
          }
          else{
          filterArray3=displayarraydummy3;
          }
          return{
            ...state,
            displayuser:filterArray3
          }

        case "Select_Team":
          state.toggle=!state.toggle
          return{
            ...state,
            buttonText:(state.toggle)?"Created":"Create Team",
            show:(state.toggle)?"block":"none"
          }

      case "Selected_Member":
        const new_member=action.payload;
       const isSelected = state.team.includes(new_member.id);
        return{
          ...state,
          team: isSelected? state.team.filter((item) => item !== new_member.id)
      : [...state.team, new_member.id]
        }

      case "Display_Team":
        const displarArr=state.displayuser.filter((item)=>state.team.includes(item.id));
        state.toggle=!state.toggle;
        return{
          ...state,
          finalTeam:displarArr,
          showTeamButtonText:(state.toggle)?"Hide Team":"Display Team"
        }
      
      
        default:
        return state;
    }
  };
  
  export default reducer;
  