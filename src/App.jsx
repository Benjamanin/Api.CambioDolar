
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import ApiApp from './Components/ApiApp';


function App() {
  return (
    <MantineProvider>
      <ApiApp />
    </MantineProvider>
  );
}

export default App;