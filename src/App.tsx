import { useState } from 'react';
import { UilWhatsapp } from '@iconscout/react-unicons';
import DropdownDemo from './components/SelectCountries/SelectCountries';

interface DetailsModel {
  phone: string;
  dialCode: string;
  phoneMask: string;
}

const App = () => {
  const [text, setText] = useState('');
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [details, setDetails] = useState({} as DetailsModel);

  const sendWhatsappMessage = () => {
    let numberMinusDialCodeLength = details.phone.length - details.dialCode.length;
    let phoneMaskWithoutSpacesLength = details.phoneMask.replace(/\s/g, '').length;
    if (numberMinusDialCodeLength == phoneMaskWithoutSpacesLength) {
      if (phoneMaskWithoutSpacesLength > 0) {
        let phoneWithoutPlus = details.phone.replace('+', '');
        window.open(`https://api.whatsapp.com/send?phone=${phoneWithoutPlus}&text=${text}`);
        setShowPhoneError(false);
      }
    } else setShowPhoneError(true);
  }

  const handlePhoneChange = (details: DetailsModel) => {
    setDetails(details);
    setShowPhoneError(false);
  }

  return (
    <div className="flex justify-center items-center w-screen h-[90vh] md:h-screen p-2 bg-[#e6f0f1]">
      <div className="bg-white w-screen md:w-[32rem] lg:w-[32rem] px-7 lg:px-10 py-3 lg:py-5 flex flex-col gap-3 rounded-xl shadow-md ">
        <div className='flex justify-center text-green-600'>
          <UilWhatsapp size='3rem' />
        </div>
        <h1 className='text-green-600 text-center drop-shadow-sm mb-2 font-bold text-md md:text-xl'>¡Envía mensajes sin agendar contactos!</h1>
        <label className='block text-md font-medium text-gray-700'>Número de teléfono</label>
        <div className='w-100 flex flex-col gap-2 rounded-lg'>
          <DropdownDemo onChange={handlePhoneChange} showPhoneError={showPhoneError} />
        </div>
        <label className='block text-md font-medium text-gray-700'>Mensaje</label>
        <div className='shadow-md rounded-lg' >
          <textarea value={text} onChange={(e) => { setText(e.target.value) }} onKeyPress={e => { e.key == 'Enter' && e.preventDefault() }} rows={5} className='border-none rounded-lg pt-1 pl-2 pr-2 w-full focus-visible:outline-none' placeholder='Escribe el mensaje' />
        </div>
        <button onClick={() => sendWhatsappMessage()}
          className='flex  bg-green-600 text-white hover:bg-green-700/90 focus:outline-none focus:border-transparent focus:ring-0 gap-2 justify-center p-2 rounded-lg shadow-md text-md px-5 py-2.5 font-semibold items-center dark:focus:ring-[#3b5998]/55"'>
          <UilWhatsapp /> Crear conversación</button>
      </div>
    </div >
  )
}

export default App;
