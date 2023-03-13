import React from "react";

const Input: React.FC<{
  label?: string;
  value?: string;
  widthInDesktop?: Widths;
  textArea?: boolean;
  error?: IStandardValidatorResponse;
  name?: string;
  type: TInputs;
  placeholder?: string;
  handleChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}> = ({
  label,
  handleChange,
  value,
  textArea,
  type,
  widthInDesktop,
  placeholder,
  name,
  error
}): JSX.Element => {
  return (
    <label className={`grid w-full  ${widthInDesktop}`}>
      <span> {label}</span>
      {textArea && (
        <textarea
          className="ring-2 ring-slate-500 bg-transparent p-2 rounded-md outline-none"
          placeholder={placeholder}
          name={name}
          onInput={handleChange as any}
          value={value}
        ></textarea>
      )}
      {!textArea && (
        <input
          className="ring-2 flex-1 ring-slate-500 p-2 rounded-md outline-none"
          placeholder={placeholder}
          type={type}
          name={name}
          onInput={handleChange as any}
          value={value}
        />
      )}
      {error && <p className="text-sm font-bold">{error.message}</p>}
    </label>
  );
};

export default Input;
