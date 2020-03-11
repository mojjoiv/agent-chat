import React from "react";

const InputFields = ({type,onChange,label,value,error,otherProps}) => {
  return (
    <div className="form-group" data-test="InputFieldsComponent">
      {otherProps}
      <label htmlFor="input1">{label}</label>
      <input
        type={type}
        // className={classnames("form-control", {
        //   "is-invalid": error
        // })}
        placeholder={label}
        onChange={onChange}
        //  name={name}
        value={value}
        // style={{ fontSize: "14px" }}
        autoComplete="off"
      />
      {error && <small className="form-text text-danger">{error}</small>}
    </div>
  );
};

export default InputFields;
