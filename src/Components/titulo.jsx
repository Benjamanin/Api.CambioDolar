import react from 'react';
import Icon_dolar from './icons/icon_dolar.png';

export default function Titulo() {
  return (
    <header className='titulo'>
        
        <img src={Icon_dolar} alt="dolar" width={60} height={60} />
        
        <h1 id='text_header'>Conversor de monedas</h1>
    </header>
  );
}