import React from "react";

const Button = ({
  type,
  className,
  onClick,
  dataToggle,
  dataTarget,
  dataDismiss,
  otherProps,
  value,
  label,
  dataWhatever
}) => {
  return (
    <button
      data-test="ButtonComponent"
      type={type}
      className={className}
      onClick={onClick}
      data-toggle={dataToggle}
      data-target={dataTarget}
      data-dismiss={dataDismiss}
      data-whatever={dataWhatever}
      onClick={onClick}
    >
      {otherProps}
      {label}
    </button>
  );
};

export default Button;
