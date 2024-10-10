import { Grid, rem } from '@mantine/core';

import { Text, Paper } from '@mantine/core';




export function Explication() {
  return (
    <Grid justify="center" align="stretch">
      <Grid.Col span={3} style={{ minHeight: rem(80) }}>
      <Paper shadow="xs" p="xl">
      <Text size='xl 'ta="center" fw={700}>
      ¿Que significa el ultimo cierre </Text>
      <Text>
      El último cierre es el valor final al que una moneda se intercambió al final del último día hábil de operaciones en el mercado, y sirve como referencia clave para evaluar su rendimiento y tendencia futura.
      </Text>
    </Paper> 
   </Grid.Col>
      <Grid.Col span={3} style={{ minHeight: rem(120) }}>
      <Paper shadow="xs" p="xl">
      <Text size='xl 'ta="center" fw={700}>
      ¿Que significa la fecha de Actualizacion? </Text>
      <Text>
        La fecha de actualización indica el último momento en que cambió la cotización de la moneda en el mercado, reflejando su valor más reciente disponible.
      </Text>
    </Paper>
    </Grid.Col>

    </Grid>
  );
}