import { Grid, Group, Paper, Text, Title } from '@mantine/core';

export default function Body() {
  return (
    <Group className='group_body'>
           
        <Paper 
        shadow="xl" 
        radius="xl" 
        withBorder p="xl"
        className='body'
        >
            <Text className='titul' ta="center" fw={700}>PASO 1</Text>

            <Text className="subtitu" size="xl" ta="center">Seleccione la divisa</Text>
            <br />
            <Text ta="center">
            Elige la moneda que deseas convertir a pesos chilenos.
            </Text>
        </Paper>
    
        <Paper 
        shadow="xl" 
        radius="xl" 
        withBorder p="xl"
        className='body'
        >
            <Text className='titul' ta="center" fw={700}>PASO 2</Text>

            <Text className="subtitu"size="xl" ta="center" >Ingrese la cantidad</Text>
            <br />
            <Text ta="center" >
            Escribe la cantidad de dinero que deseas convertir. 
            El conversor te mostrará automáticamente el valor equivalente en pesos chilenos 
            según la tasa de cambio actual.
            </Text>
        </Paper>
    
        <Paper 
        shadow="xl" 
        radius="xl" 
        withBorder p="xl"
        className='body'
        
        >
            <Text className='titul' ta="center" fw={700}>PASO 3</Text>

            <Text className="subtitu" size="xl" ta="center">Presione  convertir</Text>
            <br />
            <Text ta="center">
            Verifica la tasa de cambio y asegúrate de que estás satisfecho con el valor convertido.
            </Text>
        </Paper>
      
           
    </Group>
        



  );
}