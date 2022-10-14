import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';

function MetaItem({ title, icon }) {
    return (
        <div>MetaItem</div>
    )
}

MetaItem.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.node
}

export default MetaItem