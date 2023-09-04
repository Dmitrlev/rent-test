import React from 'react';
import styles from './withContainerWrapper.module.css';

const withContainerWrapper = (
  WrappedComponent,
  isContainer = true,
) => {
  return (props) => (
    <div className={styles.container}>
      {isContainer && (
        <div className={styles.wrapper}>
          <WrappedComponent {...props} />
        </div>
      )}
      {!isContainer && <WrappedComponent {...props} />}
    </div>
  );
};

export default withContainerWrapper;