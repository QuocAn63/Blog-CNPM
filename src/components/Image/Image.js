import React, { useState } from 'react'
import images from '~/assets/images'


function Image({ src, alt, fallback: customFallback = images.defaultImage, className, ...props }) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            src={fallback || src}
            onError={handleError}
            alt={alt}
            {...props}
        />
    );
}

export default Image