
import chile from './icons/chile.png';
import ARS from './icons/ARS.png';
import USD from './icons/USD.png';
import EUR from './icons/EUR.png';
import BRL from './icons/BRL.png';
import UYU from './icons/UYU.png';


import flecha_circular from './icons/flecha_circular.png';
import { Flex } from '@mantine/core';
import './styles.css';


const monedas = {
    ARS: ARS,
    USD: USD,
    EUR: EUR,
    BRL: BRL,
    UYU: UYU,
};

export default function Banderas ({animarFlecha,
    monedaSeleccionada,}
    
) {
   
    return (
        <div className='banderas'>
            
            <Flex
                mih={50}
                gap="xs"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
                className='flex_banderas'
            >   
                {monedas[monedaSeleccionada] && (
                    <img
                        src={monedas[monedaSeleccionada]}
                        alt={`${monedaSeleccionada} bandera`}
                        width={60}
                        height={60}
                    />
                )}
                <img className={animarFlecha ? 'flecha_circular' : ''}   src={flecha_circular} alt="clp" width={60} height={60} />
                <img src={chile} alt="clp" width={60} height={60} />
     
            </Flex>

            
        </div>
    );
}