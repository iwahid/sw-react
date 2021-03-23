import React, { useState } from 'react';
/* import styles from './LoginPage.module.css' */
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { userLogin } from '../../api/services/userService/userService';

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
          onChange={formik.handleChange}
          type="email"
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
          <input onChange={(e) => setUserCredentials(prevState => ({ ...prevState, email: e.target.value }))} placeholder='qwerty@mail.ru' type="text" />
        </label>

        <label>Password:
          <input onChange={(e) => setUserCredentials(prevState => ({ ...prevState, password: e.target.value }))} placeholder='password123!' type="text" />
        </label>

        <button type="submit">Login</button>

      </form>

      <br />

      Name is: {userCredentials.email}
      Password is: {userCredentials.password}

      <SignupForm />
    </div>
  );
}