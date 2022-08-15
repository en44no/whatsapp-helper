
import { useState } from 'react';
import { Editor } from 'primereact/editor';

const EditorDemo = (props: any) => {
  const { getText } = props;
  const [text, setText] = useState<string>('');

  const renderHeader = () => {
    return (
      <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-strike" aria-label="strike"></button>
      </span>
    );
  }

  const parseHtmlToWhatsapp = (htmlText: string) => {
    let formattedTextForWhatsapp = htmlText;

    const regex = / +<\//i;

    //replace spaces
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(regex, '</');
    //find <p> and replace with nothing
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<p>/g, '');
    //find </p> and replace with one space
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<\/p>/g, '');

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
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<br>/g, '1');
    getText(formattedTextForWhatsapp);
    setText(formattedTextForWhatsapp);
  }

  const header = renderHeader();

  return (
    <div>
      <label className='block text-md font-medium text-gray-700 mb-2'>Mensaje</label>
      <div className='border-none rounded-lg shadow-md w-full focus-visible:outline-none'>
        <Editor headerTemplate={header} style={{ height: '180px' }} value={text} onTextChange={(e) => parseHtmlToWhatsapp(e.htmlValue!)} placeholder='Escribe el mensaje' />
      </div>
    </div>
  );
}

export default EditorDemo;