import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { UserModel } from '../../models'


/** Props interface */
interface Props {
  children: any,
  path: any,
}

export const PrivateRoute: React.FC<Props> = ({ children, ...rest }) => {
  /* Getting the planet I need from the entire list loaded into the store */
  const authUser: UserModel | undefined = useSelector((state: RootState) => state.user)

  return (
    <Route
      {...rest}
      render={() =>
        authUser.email
          ? (children)
          : (<Redirect to='/sw-react/login' />)
      }
    />
  )
}