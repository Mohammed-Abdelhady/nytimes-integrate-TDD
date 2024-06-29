import { Flex, IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';
import Logo from '../core/Logo';
import { Moon, Sun } from 'lucide-react';

const LayoutNavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex
      justify="space-between"
      align="center"
      borderBottom="solid 1px"
      pb="10">
      <Logo />
      {/* Switch toggles color mode */}
      <IconButton
        shadow={'md'}
        onClick={toggleColorMode}
        aria-label="Switch Color"
        icon={colorMode == 'light' ? <Moon /> : <Sun />}
      />
    </Flex>
  );
};

export default LayoutNavBar;
