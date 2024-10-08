import React from 'react';
import { TextInput, Button, Select, Group, Paper} from '@mantine/core';
import Dolar from './icons/dolar.png';
import Icon_Flecha from './icons/icon_flecha.png';
import './styles.css';


export default function Conversor({
  monedaSeleccionada,
  cantidad,
  tasa,
  cantidadConvertida,
  manejarCambioMoneda,
  manejarCambioCantidad,
  manejarConversion,
}) {

  return (
    <Paper
    shadow="xl" 
    radius="xl" 
    withBorder p="xl"
    className='conversor'
    
    
    >
      {/* Contenido dentro del paper */}
      <div>
        {/* Group que contiene los elementos superiores */}
        <Group>

        <h2 style={{marginRight: '330px'}}>Cantidad</h2>
        <h2>Convertido a</h2>

        </Group>

        {/* Group que contiene los elementos de la logica de la Api */}
        <Group>
          <Group className='group_inner'>
              <img src={Dolar} alt="dolar" width={40} height={40} />
              
              <TextInput
              variant='unstyled'
              size='md'
              radius="lg"
              type='number'
              placeholder="Cantidad"
              value={cantidad}
              onChange={manejarCambioCantidad} 
              />

              <Select
              variant="unstyled"
              data={[
                  { value: 'CLP', label: 'CLP' },                    
                  { value: 'EUR', label: 'EUR' },
                  { value: 'JPY', label: 'JPY' },
                  { value: 'GBP', label: 'GBP' },
                  { value: 'MXN', label: 'MXN' },
                  { value: 'BRL', label: 'BRL' },
                  { value: 'CNY', label: 'CNY' },
                  { value: 'INR', label: 'INR' },
                  { value: 'CHF', label: 'CHF' },
                  { value: 'CAD', label: 'CAD' },
              ]}
              value={monedaSeleccionada}
              onChange={manejarCambioMoneda}  
              placeholder="Seleccione una moneda"
              size="md"
              radius="lg"
              className='select'
              />
          </Group>

          <img src={Icon_Flecha} alt="flecha" width={40} height={40} />
        
          <Group className='group_inner'>
              <img src={Dolar} alt="dolar" width={40} height={40} />
              <p>{cantidadConvertida} USD</p>

          </Group>

        </Group>
        
        <Group>
        <h2>Ultima Actualizacion</h2>
          

          <Button
              onClick={manejarConversion}
              mt="xl"
              size='md'
              variant="outline"
              radius="lg">Convertir
          </Button>

        </Group>

        
      </div>
      
    </Paper>
  );
}

