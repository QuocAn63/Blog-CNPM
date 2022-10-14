import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Tag({ title, slug }) {
    return (
        <Link to={"tag/" + slug} className="hover:bg-gray-300 text-sm leading-5 text-gray-700 px-1 bg-gray-100 border border-gray-300 rounded" >{title}</Link>
    )
}

Tag.propTypes = {
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
}

export default Tag