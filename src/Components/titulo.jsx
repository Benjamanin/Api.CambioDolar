import Icon_dolar from './icons/icon_dolar.png';
import './styles.css';

export default function Titulo() {
  return (
    <header className='titulo'>
        
        <img className="rotar_dolar" src={Icon_dolar} alt="dolar" width={60} height={60} />
        
        <h1 id='text_header'></h1>
    </header>
  );
}