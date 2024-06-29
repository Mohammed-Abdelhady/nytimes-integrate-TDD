import React from 'react';
import { Image, useColorMode } from '@chakra-ui/react';
import NYLogo from '../../assets/logo.png';
import NYLogoWhite from '../../assets/logo-white.png';
/**
 * Renders the logo component based on the current color mode.
 *
 * @return {JSX.Element} The logo component.
 */
const Logo = () => {
  const { colorMode } = useColorMode();

  return (
    <div>
      <Image
        src={colorMode === 'light' ? NYLogo : NYLogoWhite}
        alt="NYTimes Logo"
        width={50}
      />
    </div>
  );
};

export default Logo;
