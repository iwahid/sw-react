import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { userLogin } from '../../api/services/userService/userService';
import { UserModel } from '../../models';


/* NOTE: The skeleton of the page, with minimal functionality and style. 
Will be completely redesigned in the future */

export const LoginPage: React.FC = () => {
  const [userCredentials, setUserCredentials] = useState<UserModel>({ email: '', password: '' })

  const currentUser = useSelector((state: any) => state.user)

  /* FIXME: Type events */
  const handleFormSubmit = (event: any) => {
    event.preventDefault()
    userLogin(userCredentials)
  }

  if (currentUser.email) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Email:
          <input onChange={(e) => setUserCredentials(prevState => ({ ...prevState, email: e.target.value }))} placeholder='example@gmail.com' type="text" />
        </label>

        <label>Password:
          <input onChange={(e) => setUserCredentials(prevState => ({ ...prevState, password: e.target.value }))} placeholder='password1' type="text" />
        </label>

        <button type="submit">Login</button>

      </form>

      <br />

      Name is: {userCredentials.email}
      Password is: {userCredentials.password}
    </div>
  );
}