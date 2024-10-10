import { Group} from '@mantine/core';
import { Text, Paper } from '@mantine/core';

export function Explication() {
  return (
    <Group className='group_body'>
     
      <Paper 
      className='explication'
      shadow="md" p="xl">

        <Text className="titulo_exp" ta="center">
          Último Cierre
        </Text>
        <br />
        
        <Text>
          El último cierre es el valor final al que una moneda se intercambió al final del último día hábil de operaciones en el mercado, y sirve como referencia clave para evaluar su rendimiento y tendencia futura.
        </Text>
    </Paper> 
  
      
      <Paper 
      className='explication'
      shadow="md" p="xl">

          <Text className="titulo_exp" ta="center" >
          Fecha de Actualización
          </Text>
          <br />
          <Text>
            La fecha de actualización indica el último momento en que cambió la cotización de la moneda en el mercado, reflejando su valor más reciente disponible.
          </Text>
      </Paper>
 
    </Group>
  );
}