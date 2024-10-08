import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider, Title } from '@mantine/core';
import Api from './Components/ApiApp';

function App() {
  return (
    <MantineProvider>
      <Title order={1}>Conversor de monedas a Dolar</Title>
      <Api />
    </MantineProvider>
  );
}

export default App;