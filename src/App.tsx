import { ChakraBaseProvider } from '@chakra-ui/react';
import { theme } from './theme';
import Routes from './Routes';

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Routes />
    </ChakraBaseProvider>
  );
}

export default App;
