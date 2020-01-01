import React from "react";
import styled from "styled-components";

interface TextareaProps {
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  field: any;
  form: any;
}

const TextArea: React.FC<TextareaProps> = ({
  type,
  label,
  placeholder,
  field,
  form: { touched, errors },
  required = false,
  ...props
}) => (
  <FormGroup isError={touched[field.name] && errors[field.name]}>
    {label && (
      <FormLabel htmlFor={field.name}>
        {label} {required && <span>*</span>}
      </FormLabel>
    )}
    <FormControl placeholder={placeholder} rows="3" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <FormHelperText>{errors[field.name]}</FormHelperText>
    )}
  </FormGroup>
);

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

const FormControl = styled.textarea`
  font-size: inherit;
  min-height: 90px;
  padding: 8px;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  width: 100%;
  background: transparent;
  outline: none;
  &:active,
  &:focus {
    border-color: #4099ff;
  }
`;

const FormHelperText = styled.p`
  margin: 4px 0 0 0;
  font-size: 13px;
  line-height: 13px;
  color: #f44336;
`;

const FormGroup = styled.div<{ isError: boolean }>`
  margin-bottom: 16px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  ${props =>
    props.isError &&
    `
    ${FormControl} {
      border-color: #f44336;
    }
  `}
`;

export default TextArea;
