import { ValidationError } from "yup";

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(errors: ValidationError): Errors {
  const validationErrors: Errors = {};

  for (let i = 0; i < errors.errors.length; i++) {
    if (errors.errors[i].match(/Nome/))
      validationErrors["name"] = errors.errors[i];
    if (errors.errors[i].match(/E-mail/))
      validationErrors["email"] = errors.errors[i];
    if (errors.errors[i].match(/Senha/))
      validationErrors["password"] = errors.errors[i];
  }
  return validationErrors;
}
