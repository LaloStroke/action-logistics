import React from "react";
import Input from "../Input";

const Form: React.FC<{
  formData: { [key: string]: any };
  formFields: Array<FormField>;
  formErrors: {
    [key: string]: any;
  };
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}> = ({
  formFields,
  formData,
  handleChange,
  formErrors,
  onSubmit
}): JSX.Element => {
  return (
    <form onSubmit={onSubmit} className="flex gap-2 flex-col bg-transparent">
      {formFields.map((field: FormField) => {
        return (
          <Input
            textArea={field.textArea as boolean}
            name={field.name}
            key={field.name}
            type={field.type}
            label={field.label}
            error={formErrors[field.name]}
            placeholder={field.placeholder}
            value={formData[field.name]}
            handleChange={handleChange}
          />
        );
      })}
    </form>
  );
};

export default Form;
