import { HStack } from '@chakra-ui/react';
import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  XIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';

const ArticlelSharing = () => {
  const shareProps = {
    url: window.location.href,
  };
  return (
    <HStack mt="5">
      <FacebookShareButton {...shareProps}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>{' '}
      <TwitterShareButton {...shareProps}>
        <XIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton {...shareProps}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </HStack>
  );
};
export default ArticlelSharing;