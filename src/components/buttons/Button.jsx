import './Button.css'
export const Button = props =>
  <button
  onClick={ _ => props.click(props.label) }
    className={`
      Button
      ${ props.operation ? 'operation' : '' }
      ${ props.double ? 'double' : '' }
      ${ props.triple ? 'triple' : '' }
    `} 
    >
    {props.label}
  </button>