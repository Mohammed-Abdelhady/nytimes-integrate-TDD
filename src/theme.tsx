import '@fontsource/archivo';
import { extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react';
const { Button, Heading, Skeleton } = chakraTheme.components;

export const theme = extendBaseTheme({
  components: {
    Button,
    Heading,
    Image,
    Skeleton,
  },
  fonts: {
    heading: `'Archivo', sans-serif`,
    body: `'Archivo', sans-serif`,
  },
});
