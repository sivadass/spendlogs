import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Icon from "../icon";

interface InputProps {
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  field: any;
  form: any;
  icons: {
    name: string;
    tags: string[];
  }[];
}

const CategorySelector: React.FC<{
  icons: {
    name: string;
    tags: string[];
  }[];
}> = ({ icons }) => {
  const [term, setTerm] = useState("");
  const handleSearch = (e: any) => {
    setTerm(e.target.value);
  };
  function searchingFor(t: string) {
    return function(x: any) {
      return x.name.toLowerCase().includes(t.toLowerCase()) || !term;
      // return x.tags.filter(
      //   (tag: string) => tag.toLowerCase().includes(t.toLowerCase()) || !term
      // );
    };
  }
  useEffect(() => {
    searchingFor(term);
  }, [term]);

  console.log("s term", term);
  return (
    <CategorySelectorContainer>
      <input
        placeholder="Search for icons"
        onChange={(e: any) => handleSearch(e)}
      />
      <ul>
        {icons.filter(searchingFor(term)).map(icon => {
          return (
            <li key={icon.name}>
              <span>
                <Icon name={icon.name} />
              </span>
            </li>
          );
        })}
      </ul>
    </CategorySelectorContainer>
  );
};

const CategoryInput: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  required = false,
  field,
  form: { touched, errors },
  icons,
  ...props
}) => (
  <FormGroup isError={touched[field.name] && errors[field.name]}>
    {label && (
      <FormLabel htmlFor={field.name}>
        {label} {required && <span>*</span>}
      </FormLabel>
    )}
    {/* <FormControl type={type} {...field} {...props} placeholder={placeholder} /> */}
    <CategorySelector icons={icons} />
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
  color: rgba(0, 0, 0, 0.54);
  span {
    color: #ff5722;
  }
`;

const FormControl = styled.input`
  font-size: inherit;
  height: 48px;
  padding: 0 8px;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  width: 100%;
  background: transparent;
  outline: none;
  &:active,
  &:focus {
    border-color: #66c2aa;
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

const CategorySelectorContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 16px;
  input {
    border-radius: 6px 6px 0 0;
    margin-bottom: 16px;
    border-width: 0 0 1px 0;
    border-color: #ccc;
  }
  ul {
    margin: 0 8px 16px 8px;
    max-height: 240px;
    overflow-y: auto;
    li {
      margin: 0;
      display: inline-block;
      span {
        display: block;
        width: 48px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        border-radius: 24px;
        margin: 4px;
        background-color: #1fc8db;
        color: #fff;
        background-image: linear-gradient(141deg, #64c2ac 0%, #a0dd9d 75%);
      }
    }
    @media (max-width: 700px) {
      grid-template-columns: auto auto auto auto auto auto auto auto;
    }
    @media (max-width: 480px) {
      grid-template-columns: auto auto auto auto auto auto;
    }
    @media (max-width: 480px) {
      grid-template-columns: auto auto auto auto;
    }
    @media (max-width: 360px) {
      width: 25%;
    }
  }
`;

export default CategoryInput;
