import { useState } from 'react';
import { useContext } from 'react';
import Axios from 'axios';
import { useAuthContext } from './useAuthContext';


export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch }  =  useAuthContext()

    const signup = async (email, password) => {

        setIsLoading(true);
        setError(null);

        Axios.post('http://localhost:3001/api/user/signup',{email,password})
        .then(response =>{
            console.log(response)
            if(response.statusText !== "OK") 
            {
                setIsLoading(false)
                setError(response.data.error)
            }

            else
            {
                // Save user to local storage
                localStorage.setItem('user', response.data)
                // Update AuthContext
                dispatch({type: 'LOGIN', payload:response.data})
                setIsLoading(false);
            }   
        })
    }
    return { signup, isLoading, error}
}