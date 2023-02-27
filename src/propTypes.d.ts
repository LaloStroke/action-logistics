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
  widthInDesktop?: Widths;
};

declare type Widths = "full" | "half" | "third" | "quarter" | "small";

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

declare type TableProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
};

declare type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<T, K>>;
};

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
};
