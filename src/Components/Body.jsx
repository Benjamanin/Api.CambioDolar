import { Grid, Group, Paper, Text, Title } from '@mantine/core';

export default function Body() {
  return (
    
        <Grid>
                <Grid.Col span={4}>
                    <Paper shadow="xl" radius="xl" withBorder p="xl">
                        <Text size="xl" ta="center" fw={700}>PASO 1:</Text>
                        <Text size="xl" ta="center" td="underline">Seleccione la divisa</Text>
                        <Text ta="center">
                        Elige la moneda que deseas convertir a pesos chilenos
                        </Text>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Paper shadow="xl" radius="xl" withBorder p="xl">
                        <Text size="xl" ta="center" fw={700}>PASO 2:</Text>
                        <Text size="xl" ta="center" td="underline">Ingrese la cantidad</Text>
                        <Text ta="center" >
                        Escribe la cantidad de dinero que deseas convertir. 
                        El conversor te mostrará automáticamente el valor equivalente en pesos chilenos 
                        según la tasa de cambio actual.
                        </Text>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Paper shadow="xl" radius="xl" withBorder p="xl">
                        <Text size="xl" ta="center" fw={700}>PASO 3:</Text>
                        <Text size="xl" ta="center" td="underline">Presione  convertir</Text>
                        <Text ta="center">
                        Verifica la tasa de cambio y asegúrate de que estás satisfecho con el valor convertido
                        </Text>
                    </Paper>
                </Grid.Col>
        </Grid>
        



  );
}