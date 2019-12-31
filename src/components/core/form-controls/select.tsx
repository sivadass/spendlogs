import React from "react";
import classNames from "classnames";
import ReactSelect from "react-select";
import styled from "styled-components";

interface SelectProps {
  multi?: boolean;
  options: any;
  type: string;
  label: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  field: any;
  form: any;
  borderBottom?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  multi = false,
  type,
  label,
  placeholder,
  className,
  field,
  form: { touched, errors, setFieldValue },
  borderBottom = false,
  ...props
}) => {
  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      background: state.isSelected ? "#377ef9" : "#fff",
      color: state.isSelected ? "#fff" : "#232323",
      padding: "8px 16px"
    }),
    input: (provided: any) => ({
      ...provided,
      height: 54,
      marginBottom: 0
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      borderTop: borderBottom && "0px",
      borderBottom: borderBottom && "0px",
      borderLeft: borderBottom && "0px",
      borderRight: borderBottom && "0px",
      background: borderBottom && "#eaeaea",
      boxShadow: "none",
      borderRadius: "6px"
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none"
    }),
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    }
  };
  const onChange = (option: any) => {
    setFieldValue(
      field.name,
      multi ? option.map((item: any) => item.value) : option.value
    );
  };

  const getValue = () => {
    if (options) {
      return multi
        ? options.filter(
            (option: any) => field.value.indexOf(option.value) >= 0
          )
        : options.find((option: any) => option.value === field.value);
    } else {
      return multi ? [] : "";
    }
  };

  return (
    <StyledSelect>
      <div
        className={classNames("form-group", className, {
          error: touched[field.name] && errors[field.name]
        })}
      >
        {label && (
          <label className="form-label" htmlFor={field.name}>
            {label}
          </label>
        )}
        <ReactSelect
          styles={customStyles}
          options={options}
          isMulti={multi}
          value={getValue()}
          onChange={onChange}
          name={field.name}
        />
        {touched[field.name] && errors[field.name] && (
          <div className="form-error">{errors[field.name]}</div>
        )}
      </div>
    </StyledSelect>
  );
};

const StyledSelect = styled.div`
  .form-group {
    margin-bottom: 16px;
  }
  .form-error {
    color: #ff5722;
  }
  .form-group.error .form-control {
    border-color: #ff5722;
  }
`;

export default Select;
