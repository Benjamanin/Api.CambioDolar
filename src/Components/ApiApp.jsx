import React, { useState, useEffect } from 'react';
import { Stack } from '@mantine/core';
import Titulo from './titulo';
import Conversor from './conversor';
import { InfoConversion } from './InfoConversion';
import './styles.css';

export default function ApiApp() {
  // Estado para la moneda seleccionada
  const [monedaSeleccionada, setMonedaSeleccionada] = useState('');
  // Estado para la tasa de cambio
  const [tasa, setTasa] = useState(null);
  // Estado para la cantidad a convertir
  const [cantidad, setCantidad] = useState('');
  // Estado para la cantidad convertida
  const [cantidadConvertida, setCantidadConvertida] = useState(null);

  // Efecto para obtener la tasa de cambio cuando se selecciona una moneda
  useEffect(() => {
    if (monedaSeleccionada) {
      fetch(`https://api.exchangerate-api.com/v4/latest/${monedaSeleccionada}`)
        .then(response => response.json())
        .then(data => {
          // Verificar si la tasa de cambio existe antes de establecerla
          const tasaCambio = data.rates.USD; // Usamos la tasa de cambio a USD
          if (tasaCambio) {
            setTasa(tasaCambio);
          } else {
            console.error('Tasa de cambio no encontrada para USD');
          }
        })
        .catch(error => console.error('Error:', error));
    }
  }, [monedaSeleccionada]);

  // Maneja el cambio de moneda seleccionada
  const manejarCambioMoneda = (value) => {
    setMonedaSeleccionada(value);
  };

  // Maneja la conversión de la cantidad ingresada
  const manejarConversion = () => {
    if (tasa && cantidad) {
      setCantidadConvertida((cantidad * tasa).toFixed(2)); // Convertimos la moneda seleccionada a USD
    } else {
      setCantidadConvertida(null); // Resetea la cantidad convertida si no hay tasa o cantidad
    }
  };

  // Maneja el cambio en la cantidad ingresada
  const manejarCambioCantidad = (event) => {
    setCantidad(event.target.value);
  };

  return (
    <Stack>
      <Titulo />

      <br />

      <InfoConversion />
            
      <Conversor
        monedaSeleccionada={monedaSeleccionada}
        cantidad={cantidad}
        tasa={tasa}
        cantidadConvertida={cantidadConvertida}
        manejarCambioMoneda={manejarCambioMoneda}
        manejarCambioCantidad={manejarCambioCantidad}
        manejarConversion={manejarConversion}
      />
    </Stack>
  );
}
