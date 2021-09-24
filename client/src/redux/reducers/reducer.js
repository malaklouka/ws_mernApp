import { GET_USERS_FAIL,GET_USERS_SUCCESS,LOAD_USERS } from "../constants/constants";
const initialState={
    users:[],
    errors:null,
    isLoading:false};
export const userReducer=(state=initialState,{type,payload})=>{
            switch (type) {
                case LOAD_USERS:
                    return {
                        ...state,isLoading:true
                    }
                    
                case GET_USERS_SUCCESS:
                    return{
                        ...state,isLoading:false,users:payload
                    }
                    case GET_USERS_FAIL:
                        return{
                            ...state,isLoading:false,errors:payload
                        }
                        
                    
                default:
                    return state;
            }
}

