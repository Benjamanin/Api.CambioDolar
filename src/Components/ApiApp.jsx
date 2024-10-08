import React, { useState, useEffect } from 'react';
import { Stack, TextInput, Button, Select, Group, Space } from '@mantine/core';

export default function Api() {
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
        .then(data => setTasa(data.rates.USD)) // Usamos la tasa de cambio a USD
        .catch(error => console.error('Error:', error));
    }
  }, [monedaSeleccionada]);

  // Maneja el cambio de moneda seleccionada
  const manejarCambioMoneda = (event) => {
    setMonedaSeleccionada(event.target.value);
  };

  // Maneja la conversión de la cantidad ingresada
  const manejarConversion = () => {
    if (tasa && cantidad) {
      setCantidadConvertida((cantidad * tasa).toFixed(2)); // Convertimos la moneda seleccionada a USD
    }
  };

  // Maneja el cambio en la cantidad ingresada
  const manejarCambioCantidad = (event) => {
    setCantidad(event.target.value);
  };

  return (
    <Stack align="center" >
      <Group>
        <Select
          data={[
            { value: '', label: '' },
            { value: 'CLP', label: 'PESO CHILENO' },
            { value: 'EUR', label: 'EURO' },
            { value: 'JPY', label: 'YEN JAPONÉS' },
            { value: 'GBP', label: 'LIBRA ESTERLINA' },
            { value: 'MXN', label: 'PESO MEXICANO' },
            { value: 'BRL', label: 'REAL BRASILEÑO' },
            { value: 'CNY', label: 'YUAN CHINO' },
            { value: 'INR', label: 'RUPIA INDIA' },
            { value: 'CHF', label: 'FRANCO SUIZO' },
            { value: 'CAD', label: 'DÓLAR CANADIENSE' },
          ]}
          value={monedaSeleccionada}
          onChange={setMonedaSeleccionada}
          label="Ingrese la moneda a convertir"
          placeholder="Seleccione una moneda"
          checkIconPosition="right"
          withScrollArea={false}
          styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
          mt="md"
          size="md"
          radius="lg"
          variant="filled"
        />
        {monedaSeleccionada && (
          <Group>
            <Space w="xs" />
            <TextInput 
              mt="md"
              size='md'
              radius="lg"
              label="Ingrese la cantidad a convertir"
              type='number'
              placeholder="Cantidad" 
              value={cantidad} 
              onChange={manejarCambioCantidad} 
            />
            <Button  
              onClick={manejarConversion}
              mt="xl"
              size='md'
              variant="outline"
              radius="lg">Convertir
            </Button>
           
          </Group>
        )}
      </Group>

      {cantidadConvertida && (
        <Stack>
          <p>Cantidad Convertida: {cantidadConvertida} USD</p> 
          {/* Muestra la cantidad convertida en USD */}
        </Stack>
      )}
    </Stack>
  );
}
