declare module "who-fields-validator";

declare type IStandardValidatorResponse = {
  evaluatedKey: string;
  message: string;
  hasError: boolean;
};

declare type DataTable = {
  bodyData: string[];
  id: number;
};

declare type FormField = {
  textArea?: boolean;
  type: TInputs;
  name: string;
  placeholder: string;
  label: string;
};

declare type TFieldValidationsOption = {
  condition: string | boolean | number | ((value1: any) => unknown);
  message: string;
};

declare type TValidationOptions = {
  minLength?: TFieldValidationsOption;
  maxLength?: TFieldValidationsOption;
  required?: TFieldValidationsOption;
  validEmail?: TFieldValidationsOption;
  validName?: TFieldValidationsOption;
  ValidPassWord?: TFieldValidationsOption;
  customValidation?: TFieldValidationsOption;
  validTelephone?: TFieldValidationsOption;
  equalTo?: TFieldValidationsOption;
};

declare type TFieldValidations = {
  key: string;
  validations?: TValidationOptions;
};
