import { extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react';
const { Button, Heading } = chakraTheme.components;

export const theme = extendBaseTheme({
  components: {
    Button,
    Heading,
    Image,
  },
});
