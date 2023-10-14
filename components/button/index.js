// Define and render the button component.
export const CustomBtn = ({
  id = "",
  value = "",
  type,
  className = "",
  onClick,
  label = "",
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label> :
      <button type={type} className={className} onClick={onClick} id={id}>
        {value}
      </button>
    </div>
  );
};
