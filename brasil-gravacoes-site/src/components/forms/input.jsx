import '../../styles/components/forms/input.scss';

function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>
        {text}
      </label>
      <input
        className="input__camp"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}

export default Input;
