
import PropTypes from 'prop-types';


const Button = ({className,children}) => {
 return (<>
        <p className={className}>{children}</p>

    </>)   
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Button;