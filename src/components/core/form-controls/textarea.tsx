import React from "react";
import classNames from "classnames";
import styled from "styled-components";

interface TextareaProps {
  type: string;
  label: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  field: any;
  form: any;
}

const TextArea: React.FC<TextareaProps> = ({
  type,
  label,
  placeholder,
  className,
  field,
  form: { touched, errors },
  ...props
}) => (
  <StyledInput>
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
      <textarea
        className="form-control"
        placeholder={placeholder}
        rows="3"
        {...field}
        {...props}
      />
      {touched[field.name] && errors[field.name] && (
        <div className="form-error">{errors[field.name]}</div>
      )}
    </div>
  </StyledInput>
);

const StyledInput = styled.div`
  .form-group {
    margin-bottom: 16px;
  }
  .form-label {
    margin-bottom: 8px;
    display: block;
    color: #999999;
  }
  .form-control {
    font-size: inherit;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: block;
    width: 100%;
    min-height: 90px;
    margin: 0 0 8px 0;
  }
  .form-control:focus {
    border-color: #4099ff;
    outline: none;
  }
  .form-control:disabled {
    opacity: 0.66;
    cursor: not-allowed;
  }
  .form-error {
    color: #ff5722;
  }
  .form-group.error .form-control {
    border-color: #ff5722;
  }
`;

export default TextArea;
