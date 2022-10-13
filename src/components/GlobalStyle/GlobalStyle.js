import PropTypes from 'prop-types';

import styles from './GlobalStyle.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function GlobalStyle({ children }) {
   return <div className={cx('wrapper')}>{children}</div>;
}

GlobalStyle.propTypes = {
   children: PropTypes.node.isRequired,
};

export default GlobalStyle;
