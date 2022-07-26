import React, { useContext } from 'react'
import { LoginContext } from '../../state/loginContext'
import { Dashboard } from '../dashboard/dashboard';
import { Login } from './login';

export const Protected = () => {
    const {isLogged, setIsLogged} = useContext(LoginContext);
  return (
    isLogged === false ? <Login/> : <Dashboard/>
  )
}
