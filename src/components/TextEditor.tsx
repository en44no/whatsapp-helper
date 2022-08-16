
import { useState, useContext } from 'react';
import { Editor } from 'primereact/editor';
import { FaRegCopy } from 'react-icons/fa';
import WHContext from '../context/WHContext.jsx';

const EditorDemo = (props: any) => {
  const { getText } = props;
  const [text, setText] = useState<string>('');
  const { handleShowToastNotification } = useContext(WHContext);

  const renderHeader = () => {
    return (
      <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-strike" aria-label="strike"></button>
      </span>
    );
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    handleShowToastNotification(true);
  }

  const parseHtmlToWhatsapp = (htmlText: string) => {
    let formattedTextForWhatsapp = htmlText;

    const regex = / +<\//i;

    //replace spaces
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(regex, '</');
    //find <p> and replace with nothing
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<p>/g, '');
    //find </p> and replace with one space
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<\/p>/g, ' ');

    //replace spaces
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(regex, '</');
    //find <strong> and replace with *
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<strong>/g, '*');
    //find </strong> and replace with *
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<\/strong>/g, '* ');

    //replace spaces
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(regex, '</');
    //find <em> and replace with _
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<em>/g, '_');
    //find </em> and replace with _
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<\/em>/g, '_ ');

    //replace spaces
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(regex, '</');
    //find <s> and replace with ~
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<s>/g, '~');
    //find </s> and replace with ~
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<\/s>/g, '~ ');

    //find <br> and replace with \n
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<br>/g, '\n');
    getText(formattedTextForWhatsapp);
    setText(formattedTextForWhatsapp);
  }

  const header = renderHeader();

  return (
    <div>
      <label className='block text-md font-medium text-gray-700 mb-2'>Mensaje</label>
      <div className='border-none rounded-lg shadow-md w-full focus-visible:outline-none relative'>
        <FaRegCopy onClick={() => copyToClipboard()} className='absolute top-3 right-3 cursor-pointer' style={{ 'color': '#63696e', 'fontSize': '1.1rem' }} />
        <Editor headerTemplate={header} onPaste={(e) => { e.preventDefault(); return false; }} style={{ height: '180px' }} value={text} onTextChange={(e) => parseHtmlToWhatsapp(e.htmlValue!)} placeholder='Escribe el mensaje' />
      </div>
    </div>
  );
}

export default EditorDemo;