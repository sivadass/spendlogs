import React from "react";
import styled from "styled-components";

interface InputProps {
  type: string;
  label: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  field: any;
  form: any;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  className,
  required = false,
  field,
  form: { touched, errors },
  ...props
}) => (
  <FormGroup>
    <FormLabel htmlFor={field.name}>
      {label} {required && <span>*</span>}
    </FormLabel>
    <FormControl type={type} {...field} {...props} placeholder={placeholder} />
    {touched[field.name] && errors[field.name] && (
      <FormHelperText>{errors[field.name]}</FormHelperText>
    )}
  </FormGroup>
);

const FormGroup = styled.div`
  margin-bottom: 16px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
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
const FormControl = styled.input`
  font-size: inherit;
  height: 32px;
  padding: 0;
  margin: 20px 0 0 0;
  border: none;
  border-radius: 0;
  display: block;
  width: 100%;
  background: transparent;
  outline: none;
  border-bottom: 1px solid #ccc;
  &:active,
  &:focus {
    border-bottom-color: #4099ff;
  }
`;
const FormHelperText = styled.p`
  margin: 4px 0 0 0;
  font-size: 13px;
  line-height: 13px;
  color: #333;
`;

export default Input;
