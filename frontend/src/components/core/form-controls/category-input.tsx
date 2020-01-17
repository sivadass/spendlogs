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
  name: string;
  defaultValue: string;
  onSelect: (name: string, val: string) => any;
  icons: {
    name: string;
    tags: string[];
  }[];
}> = ({ icons, name, defaultValue, onSelect }) => {
  const [term, setTerm] = useState("");
  const [selected, setSelected] = useState(defaultValue || "");
  const handleSearch = (e: any) => {
    setTerm(e.target.value);
  };
  function searchingFor(t: string) {
    return function(x: any) {
      return x.tags.some((y: any) => y.includes(t.toLowerCase()) || !term);
    };
  }
  useEffect(() => {
    searchingFor(term);
  }, [term]);
  useEffect(() => {
    onSelect(name, selected);
  }, [selected]);
  const filteredIcons = icons.filter(searchingFor(term));
  return (
    <CategorySelectorContainer>
      <CategoryField>
        {selected ? (
          <span>
            <Icon name={selected} />
          </span>
        ) : (
          "Select an icon from below list"
        )}
      </CategoryField>
      <CategoryFilter>
        <input
          placeholder="Search for icons"
          onChange={(e: any) => handleSearch(e)}
        />
        <Icon name="search" />
      </CategoryFilter>
      <CategoryResult>
        {filteredIcons.length === 0 ? (
          <CategoryResultItem active={false}>
            <p>Sorry no results found!</p>
          </CategoryResultItem>
        ) : (
          filteredIcons.map(icon => {
            return (
              <CategoryResultItem
                key={icon.name}
                onClick={() => setSelected(icon.name)}
                active={selected === icon.name}
              >
                <span>
                  <Icon name={icon.name} />
                </span>
              </CategoryResultItem>
            );
          })
        )}
      </CategoryResult>
    </CategorySelectorContainer>
  );
};

const CategoryInput: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  required = false,
  field,
  form: { touched, errors, setFieldValue },
  icons,
  ...props
}) => (
  <FormGroup isError={touched[field.name] && errors[field.name]}>
    {label && (
      <FormLabel htmlFor={field.name}>
        {label} {required && <span>*</span>}
      </FormLabel>
    )}
    <CategorySelector
      icons={icons}
      onSelect={setFieldValue}
      defaultValue={field.value}
      name={field.name}
    />
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
`;

const CategoryField = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 8px 16px;
  span {
    display: block;
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    border-radius: 50%;
    margin: 4px;
    background-color: #1fc8db;
    color: #fff;
    background-image: linear-gradient(141deg, #64c2ac 0%, #a0dd9d 75%);
  }
`;

const CategoryFilter = styled.div`
  position: relative;
  margin: 12px 0;
  padding: 0 12px;
  input {
    border-radius: 6px;
    border: 1px solid transparent;
    background: #eee;
    height: 40px;
    &:focus {
      border-color: #66c2aa;
      background: transparent;
    }
  }
  i {
    position: absolute;
    top: 8px;
    right: 24px;
    color: #999;
  }
`;

const CategoryResult = styled.ul`
  margin: 0 8px 8px 8px;
  max-height: 228px;
  min-height: 228px;
  overflow-y: auto;
`;
const CategoryResultItem = styled.li<{ active: boolean }>`
  margin: 0;
  display: inline-block;
  span {
    display: block;
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    border-radius: 50%;
    margin: 4px;
    background-color: #1fc8db;
    color: #fff;
    cursor: pointer;
    /* border: 2px solid ${({ active }) => (active ? "red" : "transparent")}; */
    background-image: ${({ active }) =>
      active
        ? "linear-gradient(141deg, #06537b 0%,#2196F3 75%)"
        : "linear-gradient(141deg, #64c2ac 0%, #a0dd9d 75%)"};
  }
  p {
    color: #999;
    padding: 0 16px;
  }
  @media(max-width: 480px) {
    width: 20%;
    span {
      margin: 4px auto;
    }
  }
  @media(max-width: 400px) {
    width: 25%;
  }
`;

export default CategoryInput;
