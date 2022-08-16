import { FaRegCopy } from 'react-icons/fa'
import { useContext } from 'react';
import WHContext from '../context/WHContext.jsx';

const ToastNotification = () => {

  const { showToastNotification, toastNotificationText } = useContext(WHContext);

  return (
    <>
      {showToastNotification && (
        <div className="z-40 flex absolute top-5 items-center p-4 space-x-4 text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow-md" role="alert">
          <FaRegCopy className='ml-1' style={{ 'color': '#63696e', 'fontSize': '1.2rem' }} />
          <div className="pl-4 text-sm font-normal">{toastNotificationText}</div>
        </div>
      )}
    </>
  )
};

export default ToastNotification;