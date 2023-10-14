import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";



export const CustomDropdown= ({
  dataSource,
  fields,
  placeholder = "",
  value,
  onChange,
  className = "",
  label,
  id,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label> :
      <DropDownListComponent
        id="ddlelement"
        dataSource={dataSource}
        fields={fields}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};