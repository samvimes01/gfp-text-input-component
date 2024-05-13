import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Icon } from "../Icon/Icon";
import "./Input.css";

type InputProps = {
  type?: "text" | "email" | "password";
  label?: string;
  placeholder?: string;
  hint?: string;
  error?: string;
  startIcon?: string;
  endIcon?: string;
  value?: string;
  disabled?: boolean;
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
  disabled,
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
  const borderColor = disabled ? "border-neutral-100" : "border-neutral-200";
  const textColor = disabled ? "text-neutral-400" : "text-neutral-900";
  const placeholderColor = disabled
    ? "placeholder:text-neutral-400"
    : "placeholder:text-neutral-500";
  const clickable = disabled ? "pointer-events-none	" : "";

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm text-neutral-700 font-medium">
          {label}
        </label>
      )}
      <div
        className={`input h-10 px-3 py-2.5 gap-2 border rounded ${borderColor} bg-zinc-50 flex items-center w-px-340 ${
          error ? "input-err" : ""
        }`}
      >
        {startIcon && (
          <span className="text-neutral-500">
            <Icon name={startIcon} />
          </span>
        )}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`appearance-none focus:outline-none w-full min-w-[260px] bg-zinc-50 text-sm ${textColor} font-normal placeholder:text-sm ${placeholderColor} placeholder:font-normal ${clickable}`}
          value={val}
          onChange={(e) => onValue(e)}
        />
        {endIcon && (
          <span className={error ? `text-red-600` : `text-neutral-500`}>
            <Icon name={endIcon} />
          </span>
        )}
      </div>
      {hint && !error && (
        <p className="text-sm text-neutral-500 font-normal">{hint}</p>
      )}
      {error && <p className="text-sm text-red-600 font-normal">{error}</p>}
    </div>
  );
}

export default TextInput;
