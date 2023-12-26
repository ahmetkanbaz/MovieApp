/* eslint-disable react/prop-types */
const LabelInput = ({
  labelTitle,
  type,
  id,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  disabled,
  inputClassName,
  defaultValue
}) => {
  return (
    <div className="position-relative mb-4">
      <label htmlFor={name} className="form-label mb-1">
        {labelTitle}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        className={`form-control ${inputClassName}`}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default LabelInput;
