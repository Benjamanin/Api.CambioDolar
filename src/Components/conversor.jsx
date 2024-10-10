import React from 'react';
import { TextInput, Button,   Grid, Group, Paper} from '@mantine/core';
import Dolar from './icons/dolar.png';
import Icon_Flecha from './icons/icon_flecha.png';
import './styles.css';

export default function Conversor({
  
  cantidad,
  resultado,
  handleSelectChange,
  handleInputChange,
  convertirMoneda,
  cotizaciones,
  animarFlecha,
  monedaSeleccionada,
  
}) {

  // Función para formatear la fecha en formato chileno
  const formatFechaChilena = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-CL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };
  
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
              onlyNumber
              value={cantidad}
              onChange={handleInputChange} 
              />

          <select 
          className='select'
          onChange = {handleSelectChange} 
          >
            <option value=""></option>
            {cotizaciones.map((moneda, index) => (
              <option 
                key={index} value={moneda.moneda}> 
                {moneda.moneda}
              </option>
            ))}
          </select>


          </Group>

          <img className={animarFlecha ? 'flecha' : ''} src={Icon_Flecha} alt="flecha" width={40} height={40} />
        
          <Group className='group_inner'>
              <img src={Dolar} alt="dolar" width={40} height={40} />
              <TextInput
              variant='unstyled'
              size='md'
              radius="lg"
              type='number'
              placeholder="Convertido a"
              readOnly 
              value={resultado}
              />
              
              <p id='clp'>CLP</p>

          </Group>

        </Group>
        
        {/* Grid que contiene los elementos inferiores */}

        <Grid>
          <Grid.Col span={3}>
          
          <h2>Último Cierre</h2>
          
          

          <h2>
            
            {monedaSeleccionada ? (
            <>
              $ <span style={{ color: '#26b99a' }}>{
              
              monedaSeleccionada.moneda === 'EUR' 
                  ? (monedaSeleccionada.ultimoCierre * 1000).toFixed(2) 
                  : monedaSeleccionada.ultimoCierre.toFixed(2)}</span> CLP
            </>
            ) : ''}

          </h2>

          </Grid.Col>

          <Grid.Col span={5}>

          <h2>Fecha de Actualización</h2>
          <h2>{monedaSeleccionada ? formatFechaChilena(monedaSeleccionada.fechaActualizacion): ''}</h2>

          </Grid.Col>
          
          <Grid.Col span={1}>

          <Button
              onClick={convertirMoneda}
              className='boton'
              mt="xl"
              size='md'
              variant="outline"
              radius="lg">Convertir
              
          </Button>

          </Grid.Col>
        </Grid>

        
      </div>
      
    </Paper>
  );
}

