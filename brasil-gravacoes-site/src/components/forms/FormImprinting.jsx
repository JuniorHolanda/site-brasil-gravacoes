function FormImprinting({ text, name, options, handleOnChange, value }) {
  return (
    <div className="form__gravacao">
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option disabled selected>
          Selecione a gravação
        </option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.colorName}
          </option>
        ))}
      </select>
    </div>
  );
}
export default FormImprinting;
