import React from "react";
import { useDispatch } from "react-redux";
import { changeField } from "../../store/actions/fieldsActions";
import { array, string, object, oneOfType } from "prop-types";

const SearchChooser = ({ searchArr = [], searchField, fieldName, formName, className}) => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) => dispatch(changeField(formName, formField, value));
  const searcher = (arr) =>
    arr.filter((item) => item.name && item.name.toLowerCase().includes(searchField.toLowerCase()));
  const handleSelect = (e, item) => {
    e.preventDefault();
    changeFieldValue(fieldName, item);
  };

  return (
    <div className={className}>
      {searchArr.length > 0 &&
        searchField.length > 0 &&
        searcher(searchArr).map((item) => (
          <button key={item.id} onClick={(e) => handleSelect(e, item)}>
            {item.name}
          </button>
        ))}
    </div>
  );
};

SearchChooser.propTypes = {
  skillsArr: array,
  skillsField: oneOfType([string, object]),
  fieldName: string,
  className: string,
  formName: string,
};

export default SearchChooser;
