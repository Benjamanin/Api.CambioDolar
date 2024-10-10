import React, { useState, useEffect } from 'react';
import { Stack } from '@mantine/core';
import Titulo from './titulo';
import Conversor from './conversor';
import { InfoConversion } from './infoConversion';
import Banderas from './banderas';
import Body from './Body';
import { Explication } from './Explication';
import './styles.css';

export default function ApiApp() {
  //Estados
  const [cotizaciones, setCotizaciones] = useState([]);
  const [monedaSeleccionada, setMonedaSeleccionada] = useState(null);
  const [cantidad, setCantidad] = useState('');
  const [resultado, setResultado] = useState(null);
  const [animarFlecha, setAnimarFlecha] = useState(false);

  //El hook useEffect se ejecuta después de que el componente se renderiza por primera vez
  useEffect(() => {

    fetch("https://cl.dolarapi.com/v1/cotizaciones")
      .then(response => response.json())
      .then(data => {
        setCotizaciones(data);
      })
      .catch(error => console.error('Error fetching data:', error));

  }, []);


//FUNCIONES

//Función para manejar los cambios en el select de monedas  
  const handleSelectChange = (event) => {
    const moneda = cotizaciones.find(moneda => moneda.moneda === event.target.value);
    
    setMonedaSeleccionada(moneda);
    
    setResultado(null); // Resetear el resultado cuando se cambia la moneda
  };

//Función para manejar los cambios en el input de cantidad
  const handleInputChange = (event) => {
    setCantidad(event.target.value);
  };

//Función para convertir la moneda
  const convertirMoneda = () => {
    if (monedaSeleccionada) {
      if (monedaSeleccionada.moneda === 'EUR') {
        // Calcula la conversión de EUR a CLP
        const conversion = cantidad*1000*monedaSeleccionada.venta; 
        setResultado(conversion);
      } else {
        // Calcula la conversión para otras monedas
        const conversion = cantidad * monedaSeleccionada.venta;
        setResultado(conversion);
      }
    }
    setAnimarFlecha(true);
    setTimeout(() => setAnimarFlecha(false), 2000); // Detener después de 2 segundos

  };

//FUNCIONES

  return (
    // Stack es un contenedor vertical de los componentes

    <Stack>
      <Titulo />

      <InfoConversion monedaSeleccionada={monedaSeleccionada ? monedaSeleccionada.nombre : ''} />

      <Banderas 
        animarFlecha={animarFlecha} 
        monedaSeleccionada={monedaSeleccionada ? monedaSeleccionada.moneda : ''} 
      />

      <br />
      
      <Conversor
        monedaSeleccionada={monedaSeleccionada}
        cantidad={cantidad}
        resultado={resultado}
        handleSelectChange={handleSelectChange}
        handleInputChange={handleInputChange}
        convertirMoneda={convertirMoneda}
        cotizaciones={cotizaciones}
        animarFlecha={animarFlecha}

      />

      <br />

      <Body /> 

      <br />

      <Explication/>
      

    </Stack>
    
  );
}
