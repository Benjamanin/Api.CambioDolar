import { Text } from '@mantine/core';

export function InfoConversion({monedaSeleccionada }) {
    
    return (
        <div>
        <Text className= "titulo_infc" variant="gradient"
      gradient={{ from: 'blue', to: 'lime', deg: 88 }} fw={900}
        id = 'infoconversion'
        >
            Convierta {monedaSeleccionada} a Peso chileno
        </Text>

     
        </div>
    );
}