import PropTypes from 'prop-types'
import { useState } from 'react';
import images from '~/assets/images';

function Image({ src, alt, fallback: customFallback = images.defaultImage, className, ...props }) {
   const [fallback, setFallback] = useState('');

   const handleError = () => {
      setFallback(customFallback);
   };

   return <img src={fallback || src} onError={handleError} alt={alt} className={className} {...props} />;
}

Image.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string,
   fallback: PropTypes.string,
   className: PropTypes.string,
}

export default Image;
