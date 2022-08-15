import React, { useState } from 'react';
import WHContext from './WHContext';

const WHState = (props) => {
  const [showToastNotification, setShowToastNotification] = useState(false);

  const handleShowToastNotification = () => {
    setShowToastNotification(true);
    setTimeout(() => {
      setShowToastNotification(false);
    }, 5000);
  }

  const handleHideToastNotification = () => {
    setShowToastNotification(false);
  }

  return (
    <WHContext.Provider
      value={{
        showToastNotification,
        handleShowToastNotification,
        handleHideToastNotification
      }}
    >
      {props.children}
    </WHContext.Provider>
  );
};

export default WHState;
