export const loginValidations: TFieldValidations[] = [
  {
    key: "email",
    validations: {
      validEmail: {
        condition: true,
        message: "invalid field"
      },
      required: {
        condition: true,
        message: "field is required"
      }
    }
  },
  {
    key: "password",
    validations: {
      minLength: {
        condition: 8,
        message: "field must be at least 8 characters"
      },
      required: {
        condition: true,
        message: "field is required"
      }
    }
  }
];
