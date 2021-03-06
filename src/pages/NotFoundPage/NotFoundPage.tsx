import React from 'react';
import styles from './NotFoundPage.module.css'

/** A component that returns a block with an image stating that the page was not found */
export const NotFoundPage: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.backgroundImage} />
  </div>
)