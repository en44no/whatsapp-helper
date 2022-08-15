import { useState } from 'react';
import { UilWhatsapp } from '@iconscout/react-unicons';
import DropdownDemo from './components/SelectCountries';
import EditorDemo from './components/TextEditor';
import ToastNotification from './components/ToastNotification';
import WHState from './context/WHState.jsx'

interface Phone {
  number: string;
  isValid: boolean;
}

const App = () => {
  const [textToSend, setTextToSend] = useState('');
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<Phone>();

  const sendWhatsappMessage = () => {
    if (phoneNumber && phoneNumber.isValid) {
      let phoneWithoutPlus = phoneNumber.number.replace('+', '');
      window.open(`https://api.whatsapp.com/send?phone=${phoneWithoutPlus}&text=${textToSend}`);
      setShowPhoneError(false);
    } else setShowPhoneError(true);
  }

  const handlePhoneChange = (phoneNumber: Phone) => {
    setPhoneNumber(phoneNumber);
    setShowPhoneError(false);
  }

  const handleTextChange = (text: string) => {
    setTextToSend(text);
  }

  return (
    <WHState>
      <div className="flex justify-center items-center w-screen h-[90vh] md:h-screen p-2 bg-[#e6f0f1]">
        <ToastNotification />
        <div className='relative bg-white w-screen md:w-[32rem] lg:w-[32rem] flex flex-col gap-3 rounded-xl shadow-md '>
          <div className="overflow-auto px-7 lg:px-10 py-3 lg:py-5 ">
            <div className='flex justify-center text-green-600'>
              <UilWhatsapp size='3rem' />
            </div>
            <h1 className='text-green-600 text-center drop-shadow-sm mb-2 font-bold text-md md:text-xl mt-2'>¡Envía mensajes sin agendar contactos!</h1>
            <div className='w-100 flex flex-col gap-2 rounded-lg mt-2 mb-2'>
              <DropdownDemo onChange={handlePhoneChange} />
            </div>
            <EditorDemo getText={handleTextChange} />
            <button onClick={() => sendWhatsappMessage()}
              className='w-full flex mt-4 bg-green-600 text-white hover:bg-green-700/90 focus:outline-none focus:border-transparent focus:ring-0 gap-2 justify-center p-2 rounded-lg shadow-md text-md px-5 py-2.5 font-semibold items-center dark:focus:ring-[#3b5998]/55"'>
              <UilWhatsapp /> Crear conversación</button>
            {showPhoneError && (
              <div className='bg-red-100 rounded-lg text-red-900 p-1 font-medium text-sm text-center mt-2'>
                <p>Debes ingresar un número de teléfono válido</p>
              </div>
            )}
          </div>
        </div>
      </div >
    </WHState>
  )
}

export default App;
