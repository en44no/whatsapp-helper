import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilEnvelopeAdd,
  UilGlobe
} from "@iconscout/react-unicons";
import { useContext } from 'react';
import WHContext from '../context/WHContext';

const Social = () => {

  const { handleShowToastNotification } = useContext(WHContext);

  const notificationAndCopyToClipboard = () => {
    navigator.clipboard.writeText("nahuelmarquez12@gmail.com");
    handleShowToastNotification('Dirección de Gmail copiada a tu portapapeles.');
  };

  return (
    <>
      <div className="absolute bottom-5 right-6 flex items-center gap-3">
        <a className="github-icon" href="https://github.com/en44no" target="_blank" rel="noreferrer" title="GitHub">
          <UilGithubAlt size="1.7rem" />
        </a>
        <a className="linkedin-icon" href="https://www.linkedin.com/in/nahuelmarquez/" target="_blank" rel="noreferrer" title="Linkedin">
          <UilLinkedinAlt size="1.7rem" />
        </a>
        <button className="email-icon mt-1" title="Gmail address" aria-label="GetMyEmailAddressButton" onClick={() => notificationAndCopyToClipboard()} >
          <UilEnvelopeAdd size="1.7rem" />
        </button>
        <a className="website-icon mt-1" href="https://nahuelmarquez.com" target="_blank" rel="noreferrer" title="Personal website">
          <UilGlobe size="1.7rem" />
        </a>
      </div>
    </>
  );
};

export default Social;
