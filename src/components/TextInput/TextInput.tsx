type InputProps = {
  type: 'text' | 'password';
}

function TextInput({type}: InputProps) {
  return (
    <input type={type}/>
  )
}

export default TextInput