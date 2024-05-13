import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Icon } from "../Icon/Icon";

type InputProps = {
  type?: "text" | "email" | "password";
  label?: string;
  placeholder?: string;
  hint?: string;
  error?: string;
  startIcon?: string;
  endIcon?: string;
  value?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (v: string) => any;
};

function TextInput({
  type = "text",
  label,
  placeholder = "",
  hint,
  error,
  startIcon,
  endIcon,
  value = "",
  onChange,
}: InputProps) {
  const [val, setVal] = useState(value);
  const id = nanoid();
  const onValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.value) return;
    setVal(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="flex flex-col">
      {label && <label htmlFor={id}>{label}</label>}
      <div className={`flex`}>
        {startIcon && <Icon name={startIcon} />}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`appearance-none focus:outline-none`}
          value={val}
          onChange={(e) => onValue(e)}
        />
        {endIcon && <Icon name={endIcon} />}
      </div>
      {hint && !error && <p>{hint}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default TextInput;
