import React from 'react';
import Input from '../Input';
import Select from '../Select';
import SelectOption from '../Select/SelectOption/SelectOption';

const Form: React.FC<{
  formData: { [key: string]: any };
  formFields: Array<FormField>;
  formErrors: {
    [key: string]: any;
  };
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}> = ({ formFields, formData, handleChange, formErrors, onSubmit }): JSX.Element => {
  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-12 gap-4 w-full max-w-2xl align-middle justify-evenly"
    >
      {formFields.map((field: FormField): JSX.Element => {
        if (field.type === 'select') {
          return (
            <div className={`${field.widthInDesktop}`} key={field.name}>
              <Select
                className={`defaultSelect ${field.widthInDesktop} `}
                placeholder={field.placeholder}
              >
                {field.optionsSelect?.map((option: string) => (
                  <SelectOption key={option} value={option}>
                    {option}
                  </SelectOption>
                ))}
              </Select>
            </div>
          );
        }
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
            widthInDesktop={field.widthInDesktop}
          />
        );
      })}
    </form>
  );
};

export default Form;
