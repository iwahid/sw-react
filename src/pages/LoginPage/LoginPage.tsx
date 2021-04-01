import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { UserModel } from '../../models';
import { RootState } from '../../store/store';
import { userLogin, userRegister, FirebaseAuthResponse } from '../../api/services/userService/userService';
import styles from './LoginPage.module.css'
import stormtrooper1 from '../../assets/imagePlaceHolder/Stormtrooper1.png'
import stormtrooper2 from '../../assets/imagePlaceHolder/Stormtrooper2.png'

/* Login / registration form page */
export const LoginPage: React.FC = () => {

  /* State for dynamically changing titles in the form header. Shows authorization and registration labels alternately */
  const [positionX, setPositionX] = useState<number>(0)

  useEffect(() => {
    const timer1 = setInterval(() => setPositionX(-100), 1500)
    const timer2 = setInterval(() => setPositionX(0), 3000)

    /* This will clear Timeout */
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [])

  /* Stores the login / registration status of the user (messages about success and errors) */
  const [registrationStatus, changeRegistrationStatus] = useState<FirebaseAuthResponse>({ type: '', message: '' })

  /* Actual user data retrieved from the auth form */
  const [userCredentials, setUserCredentials] = useState<UserModel>({ email: '', password: '' })

  /* Checking if the form has been submitted to show the user possible form filling errors */
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false)

  /* User login */
  const handleSignInForm = (event: React.FormEvent<HTMLButtonElement | HTMLFormElement>) => {
    event.preventDefault()
    setFormSubmitted(true)

    if (userCredentials.email && userCredentials.password) {
      userLogin(userCredentials)
        .catch(error => changeRegistrationStatus(error))
    }
  }

  /* User registration */
  const handleSignUpForm = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setFormSubmitted(true)

    if (userCredentials.email && userCredentials.password) {
      userRegister(userCredentials)
        .then((message) => changeRegistrationStatus(message))
        .catch(error => changeRegistrationStatus(error))
    }
  }

  /* Checking if the user is logged in to the application */
  const currentUser = useSelector((state: RootState) => state.user)

  if (currentUser.email) {
    return <Redirect to='/' />
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        <div className={`${styles.image} ${styles.stormtrooperLeft}`}>
          <img alt="stormtrooper" src={stormtrooper1} />
        </div>

        <div className={styles.formContainer}>

          <div className={styles.titleSection}>
            <div className={styles.titleContainer}>
              <p
                className={styles.title}
                style={{
                  overflow: 'hidden',
                  transform: `translateX(${positionX}%)`,
                }}
              >authorization</p>
              <p
                className={styles.title}
                style={{
                  overflow: 'hidden',
                  transform: `translateX(${positionX}%)`,
                }}
              >registration</p>
            </div>

            <p className={styles.subTitle}>of your account</p>
          </div>

          <form className={styles.form} name="form" onSubmit={handleSignInForm}>

            <div className={styles.formElement}>
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                name="email"
                onChange={(e) => setUserCredentials(prevState => ({ ...prevState, email: e.target.value }))}
                placeholder='example@gmail.com'
                type="text"
                value={userCredentials.email} />
              {formSubmitted && !userCredentials.email &&
                <p className={styles.errorMessage}>Email is required</p>
              }
            </div>

            <div className={styles.formElement}>
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                name="password"
                onChange={(e) => setUserCredentials(prevState => ({ ...prevState, password: e.target.value }))}
                placeholder='password'
                type="password"
                value={userCredentials.password} />
              {formSubmitted && !userCredentials.password &&
                <p className={styles.errorMessage}>Password is required</p>
              }
            </div>

            <div className={styles.formGroup}>
              <button className={styles.loginButton} onClick={handleSignInForm} type='button'>Sign in</button>
              <button className={styles.loginButton} onClick={handleSignUpForm} type='button'>Sign up</button>
            </div>

            {registrationStatus.type &&
              <div className={registrationStatus.type === 'SUCCESS' ? styles.registrationStatusSuccess : styles.registrationStatusError}>
                <p>{registrationStatus.message}</p>
              </div>
            }

          </form>
        </div>
       
        <div className={`${styles.image} ${styles.stormtrooperRight}`}>
          <img alt="stormtrooper" src={stormtrooper2} />
        </div>
      </div>
    </div>
  );
}