import { Image, Skeleton } from '@chakra-ui/react';
import React, { useState } from 'react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  height?: any;
}

const ImageLoader = ({ src, alt, height = '293px' }: ImageLoaderProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Skeleton isLoaded={imageLoaded} height={height} width="100%" mb="3">
      <Image
        objectFit="cover"
        src={src}
        alt={alt}
        width="100%"
        height={height}
        onLoad={() => setImageLoaded(true)}
        style={!imageLoaded ? { display: 'none' } : {}}
      />
    </Skeleton>
  );
};

export default ImageLoader;
