import './Button.css'

const Button = (props:any) => {
    return <button onClick={props.callApi}>
        Click to generate a joke.
    </button>;
}

// Export Button Component
export default Button;