import React from 'react'
import styles from './Button.module.scss'

interface BtnSizeInterface {
  small: 'small',
  medium: 'medium',
  large: 'large'
}

export const BTN_SIZE: BtnSizeInterface = {
  small: 'small',
  medium: 'medium',
  large: 'large'
}

export interface ButtonProps {
  title: string,
  size?: "small" | 'medium' | 'large',
  type?: 'button' | 'submit' | 'reset',
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void,
}


export const Button: React.FC<ButtonProps> = (props) => (
  <button
    className={`
      ${styles.button} 
      ${props.size && styles[`button_${props.size}`]}
      `}
    onClick={props.onClick}
    type={props.type && 'button'}
  >{props.title || props.children}</button>
)