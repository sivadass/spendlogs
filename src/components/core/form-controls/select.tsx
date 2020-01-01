import React from "react";
import ReactSelect from "react-select";
import styled from "styled-components";

interface SelectProps {
  multi?: boolean;
  options: any;
  type: string;
  label: string;
  placeholder?: string;
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
  field,
  form: { touched, errors, setFieldValue },
  required = false,
  ...props
}) => {
  const isError = touched[field.name] && errors[field.name];
  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      background: state.isSelected
        ? "#66c2aa"
        : state.isFocused
        ? "#ecf3fb"
        : "#fff",
      color: state.isSelected ? "#fff" : "#232323",
      padding: "8px 16px"
    }),
    input: (provided: any) => ({
      ...provided,
      height: 42,
      margin: "0 !important"
    }),
    control: (provided: any) => ({
      ...provided,
      boxShadow: "none",
      borderRadius: "4px",
      borderColor: isError ? "#f44336" : "#ccc"
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none"
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      top: state.isFocused ? 28 : 24,
      transform: "translateY(-12px)"
    }),
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition, top: 28, lineHeight: 24 };
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
    <FormGroup>
      {label && (
        <FormLabel htmlFor={field.name}>
          {label} {required && <span>*</span>}
        </FormLabel>
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
        <FormHelperText>{errors[field.name]}</FormHelperText>
      )}
    </FormGroup>
  );
};

const FormHelperText = styled.p`
  margin: 4px 0 0 0;
  font-size: 13px;
  line-height: 13px;
  color: #f44336;
`;

const FormLabel = styled.label`
  font-size: 13px;
  line-height: 20px;
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: rgba(0, 0, 0, 0.54);
  span {
    color: #ff5722;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export default Select;
