import React, { SelectHTMLAttributes } from "react";

import "./styles.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    disabled?: boolean;
    hidden?: boolean;
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        {options.map(({ disabled, hidden, value, label }) => (
          <option key={value} value={value} disabled={disabled} hidden={hidden}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
