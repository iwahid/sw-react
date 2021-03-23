import React, { useState } from 'react';
/* import styles from './LoginPage.module.css' */
import { Redirect } from 'react-router-dom'
import { userLogin } from '../../api/services/userService/userService';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';

/* FIXME: типизировать страницу */

export const LoginPage: React.FC = () => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

  const currentUser = useSelector((state: any) => state.user)

  /* FIXME: протипизировать события */
  const handleFormSubmit = (event: any) => {
    event.preventDefault()
    userLogin(userCredentials)
  }

  if (currentUser.email) {
    return <Redirect to='/' />
  }

  /* форма */
  const SignupForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
      initialValues: {
        email: '',
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    
    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Email:
          <input type="text" placeholder='qwerty@mail.ru' onChange={(e) => setUserCredentials(prevState => ({ ...prevState, email: e.target.value }))} />
        </label>

        <label>Password:
          <input type="text" placeholder='password123!' onChange={(e) => setUserCredentials(prevState => ({ ...prevState, password: e.target.value }))} />
        </label>

        <button type="submit">Login</button>

      </form>

      <br />

      Name is: {userCredentials.email}
      Password is: {userCredentials.password}

      <SignupForm></SignupForm>
    </div>
  );
}