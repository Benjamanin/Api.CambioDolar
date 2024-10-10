import { Group} from '@mantine/core';
import { Text, Paper } from '@mantine/core';

export function Explication() {
  return (

    <Group className='group_body'>
     
      <Paper 
      className='explication'
      shadow="md" p="xl">
    <Grid justify="center" align="stretch">
      <Grid.Col span={3} style={{ minHeight: rem(80) }}>
      <Paper shadow="xs" p="xl">
      <Text size='xl 'ta="center" fw={700}>
      ¿Que significa el último cierre ?</Text>
      <Text>
      El último cierre es el valor final al que una moneda se intercambió al final del último día hábil de operaciones en el mercado y sirve como referencia para evaluar su rendimiento y tendencia futura.
      </Text>
    </Paper> 
   </Grid.Col>
      <Grid.Col span={3} style={{ minHeight: rem(120) }}>
      <Paper shadow="xs" p="xl">
      <Text size='xl 'ta="center" fw={700}>
      ¿Que significa la fecha de actualizacion? </Text>
      <Text>
        La fecha de actualización indica el último momento en que cambió la cotización de la moneda en el mercado, reflejando su valor más reciente disponible.
      </Text>
    </Paper>
    </Grid.Col>
    </Grid>

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