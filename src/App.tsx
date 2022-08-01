import { useState } from 'react';
import { UilWhatsapp } from '@iconscout/react-unicons';

function App() {

  const [phone, setPhone] = useState('');
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [text, setText] = useState('');

  const sendWhatsappMessage = () => {
    if (phone) window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${text}`);
    else setShowPhoneError(true);
  }

  return (
    <div className="flex justify-center items-center w-screen h-[90vh] md:h-screen p-2 bg-[#e6f0f1]">
      <div className="bg-white w-screen md:w-[32rem] lg:w-[32rem] px-7 lg:px-10 py-3 lg:py-5 flex flex-col gap-3 rounded-xl shadow-md ">
        <div className='flex justify-center text-green-600'>
          <UilWhatsapp size='3rem' />
        </div>
        <h1 className='text-green-600 text-center drop-shadow-sm mb-2 font-bold text-xl'>¡Envía mensajes sin agendar contactos!</h1>
        <label className='block text-md font-medium text-gray-700'>Número de teléfono</label>
        <div className='w-100 flex flex-col gap-2'>
          <input autoFocus type='number' value={phone} onChange={(e) => { setPhone(e.target.value), setShowPhoneError(false) }} className='border-none shadow-md rounded-lg h-10 pl-2 pr-2 w-full' placeholder='Escribe el número de teléfono' />
          {showPhoneError && (
            <span className='w-100 shadow-md text-center bg-gray-400 px-2 py-1 rounded-lg font-medium text-sm text-white'>Debes especificar un número de teléfono</span>
          )}
        </div>
        <label className='block text-md font-medium text-gray-700'>Mensaje</label>
        <textarea value={text} onChange={(e) => { setText(e.target.value) }} onKeyPress={e => { e.key == 'Enter' && e.preventDefault() }} rows={5} className='border-none shadow-md rounded-lg pt-1 pl-2 pr-2 w-full' placeholder='Escribe el mensaje' />
        <button onClick={() => sendWhatsappMessage()}
          className='flex  bg-green-600 text-white hover:bg-green-700/90 focus:outline-none focus:border-transparent focus:ring-0 gap-2 justify-center p-2 rounded-lg shadow-md text-md px-5 py-2.5 font-semibold items-center dark:focus:ring-[#3b5998]/55"'>
          <UilWhatsapp /> Crear conversación</button>
      </div>
    </div >
  )
}

export default App
