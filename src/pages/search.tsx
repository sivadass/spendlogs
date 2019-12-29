import React from "react";
import { FixedContainer, PageTitle, Wrapper } from "../styled/common";

const Search = () => {
  return (
    <FixedContainer>
      <PageTitle>Search</PageTitle>
      <Wrapper>
        <input placeholder="Search for Expenses, Bills, etc" />
      </Wrapper>
    </FixedContainer>
  );
};

export default Search;
