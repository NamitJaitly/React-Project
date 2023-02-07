import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../redux/configureStore";
import { useNavigate } from 'react-router';

export const AuthHOC = ({ children }: any) => {
  // const user = useSelector((state: RootState) => state.auth.user)
  // const navigate = useNavigate()
  // const userToken = localStorage.getItem('user-token' )
  // useEffect(() => {
  //   if (userToken) {
  //     navigate('/dashboard')
  //   }
  //   else {
  //     navigate('/login')
  //   }
  // }, [user, navigate])

  return children
}
