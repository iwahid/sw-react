import React from 'react';
import styles from './NotFoundPage.module.css'
import Page404 from './../../assets/imagePlaceHolder/PageNotFound_404.png'

export const NotFoundPage: React.FC = () => {

  return (
    <div
      className={styles.wrapper}>
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundImage: `url('${Page404}') `,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          overflow: 'hidden',
        }}
      ></div>
    </div>
  );
}