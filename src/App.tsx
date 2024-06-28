import { ChakraBaseProvider } from '@chakra-ui/react';
import { theme } from './theme';
import Routes from './Routes';
import StoreProvider from './StoreProvider';

/**
 * Main application component.
 *
 * This component sets up the global context providers and theme for the application.
 * It includes the following providers:
 * - StoreProvider: Provides state management for the application.
 * - ChakraBaseProvider: Applies the Chakra UI theme to the application.
 *
 * @returns {JSX.Element} The root component of the application with the necessary providers.
 */
function App() {
  return (
    <StoreProvider>
      <ChakraBaseProvider theme={theme}>
        <Routes />
      </ChakraBaseProvider>
    </StoreProvider>
  );
}

export default App;
