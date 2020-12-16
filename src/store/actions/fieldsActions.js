import { CHANGE_FIELDS, CLEAR_FIELDS } from "../constantsType";

export const changeField = (formName, fieldName, value) => ({
  type: CHANGE_FIELDS,
  formName,
  fieldName,
  value,
});

export const clearFields = () => ({
  type: CLEAR_FIELDS,
});
