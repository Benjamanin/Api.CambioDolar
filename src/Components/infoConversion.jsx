import { Text } from '@mantine/core';

export function InfoConversion({monedaSeleccionada }) {
    
    return (
        <div>
        <Text variant="gradient"
      gradient={{ from: 'blue', to: 'lime', deg: 88 }} size= "xl" fw={900}
        id = 'infoconversion'
        >
            Convierta {monedaSeleccionada} a Peso chileno
        </Text>

     
        </div>
    );
}