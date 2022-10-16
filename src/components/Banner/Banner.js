import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';

function Banner({ src, href, to, alt, className }) {
   let Comp = 'div';

   if (href) {
      Comp = 'a';
   }
   if (to) {
      Comp = Link;
   }

   const props = { href, to, className };

   return (
      <div className="pt-5 pb-10">
         <div className="max-w-screen-xl m-auto">
            <Comp props={props}>
               <Image src={src} alt={alt} className={className + ' min-h-[100px] max-h-[200px] object-cover'} />
            </Comp>
         </div>
      </div>
   );
}

Banner.propTypes = {
   src: PropTypes.string,
   href: PropTypes.string,
   to: PropTypes.string,
   alt: PropTypes.string,
   className: PropTypes.string,
};

export default Banner;
