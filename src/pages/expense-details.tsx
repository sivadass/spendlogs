import React from "react";
import { FixedContainer, PageTitle, Wrapper } from "../styled/common";

const ExpenseDetails = () => {
  return (
    <FixedContainer>
      <PageTitle>Expense Details</PageTitle>
      <Wrapper>
        <p>Expense Description</p>
      </Wrapper>
    </FixedContainer>
  );
};

export default ExpenseDetails;
