import PropTypes from 'prop-types' // use impt 

const Button = ({ color, text, onClick}) => {
    return (
    <button onClick={onClick}
    style={{backgroundColor: color}} 
    className='btn'>
        {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'green',
}

Button.prototypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button