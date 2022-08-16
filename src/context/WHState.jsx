import React, { useState } from 'react';
import WHContext from './WHContext';

const WHState = (props) => {
  const [showToastNotification, setShowToastNotification] = useState(false);
  const [toastNotificationText, setToastNotificationText] = useState('');

  const handleShowToastNotification = (text) => {
    setToastNotificationText(text);
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
        toastNotificationText,
        handleShowToastNotification,
        handleHideToastNotification
      }}
    >
      {props.children}
    </WHContext.Provider>
  );
};

export default WHState;
