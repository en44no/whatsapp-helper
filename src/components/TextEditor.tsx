
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
    console.log(`htmlText ${htmlText}`);
    let formattedTextForWhatsapp = htmlText;
    //find <p> and replace with nothing
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<p>/g, '');
    //find </p> and replace with nothing
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<\/p>/g, '');

    //find spaces between <strong> to first letter and replace with nothing
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<strong> /g, '');
    //find <strong> and replace with *
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<strong>/g, '*');
    //find </strong> and replace with *
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<\/strong>/g, '*');

    //remove spaces between first letter after <em> and last before </em>
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<em>([a-zA-Z])/g, '<em>$1');
    //find <em> and replace with _
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<em>/g, '_');
    //find </em> and replace with _
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<\/em>/g, '_');

    //remove spaces between first letter after <s> and last before </s>
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<s>([a-zA-Z])/g, '<s>$1');
    //find <s> and replace with ~
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<s>/g, '~');
    //find </s> and replace with ~
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<\/s>/g, '~');

    //find <br> and replace with \n
    formattedTextForWhatsapp = formattedTextForWhatsapp.replace(/<br>/g, '\n');
    getText(formattedTextForWhatsapp);
    setText(formattedTextForWhatsapp);
    console.log(`formattedTextForWhatsapp ${formattedTextForWhatsapp}`);
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