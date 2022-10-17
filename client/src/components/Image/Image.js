import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, fallback: customFallback = images.defaultImage, className, ...props }, ref) => {
   const [fallback, setFallback] = useState('');

   const handleError = () => {
      setFallback(customFallback);
   };

   return <img ref={ref} src={fallback || src} onError={handleError} alt={alt} className={className} {...props} />;
});

Image.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string,
   fallback: PropTypes.string,
   className: PropTypes.string,
};

export default Image;
