import {
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  LOAD_USERS,
  EDIT_USER,
  DELETE_USER,
} from "../constants/constants";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USERS });
  try {
    const response = await axios.get("/api/users");
    dispatch({ type: GET_USERS_SUCCESS, payload: response.data.users });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_USERS_FAIL, payload: error });
  }
};

export const deleteUser = (_id) => async (dispatch) => {
  try {
    const response = await axios.delete(`/api/users/${_id}`);
    dispatch({ type: DELETE_USER });
    dispatch(getUsers());
  } catch (error) {
    console.log(error);
  }
};

export const  addUser=(newUser,history)=>async dispatch=>{
try {
    const response=await axios.post("/api/",newUser);
    history.push("/")
    dispatch(getUsers());
} catch (error) {
    console.dir(error)
}
}