import './styles.css';

function Button({text, onClick, disabled }) {
    return (
        <button disabled={disabled} onClick={onClick} className='button'>{text}</button>
    )
}

export default Button