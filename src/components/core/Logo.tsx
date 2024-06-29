import React from 'react';
import { Box, Image, useColorMode } from '@chakra-ui/react';
import NYLogo from '../../assets/logo.png';
import NYLogoWhite from '../../assets/logo-white.png';
import { Link } from 'react-router-dom';
/**
 * Renders the logo component based on the current color mode.
 *
 * @return {JSX.Element} The logo component.
 */
const Logo = () => {
  const { colorMode } = useColorMode();

  return (
    <div>
      <Box as={Link} to="/">
        <Image
          src={colorMode === 'light' ? NYLogo : NYLogoWhite}
          alt="NYTimes Logo"
          width={50}
        />
      </Box>
    </div>
  );
};

export default Logo;
