import { useDispatch, useSelector } from "react-redux";
import { authenticateUser as authUser } from "../redux/slices";

export const useUser= () => {
    const userData=useSelector((state)=> state.user.userData);
    const dispatch=useDispatch();

    const authenticateUser = (data) =>{
        dispatch(authUser(data));


    }
    return {
        userData,
        authenticateUser,
    };

};