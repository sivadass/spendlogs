import React from "react";
import { Link } from "react-router-dom";
import { FixedContainer, PageTitle, Wrapper } from "../styled/common";

interface ExpenseData {
  category: string;
  description: string;
  createdOn: string;
  updatedOn: string;
  amount: number;
  vendor: string;
  id: string;
}

const listData: ExpenseData[] = [
  {
    category: "milk",
    description: "Aavin Milk",
    createdOn: "28/12/2019",
    updatedOn: "30/12/2019",
    amount: 240,
    vendor: "Milk Vendor",
    id: "1"
  },
  {
    category: "water",
    description: "Drinking Water",
    createdOn: "31/12/2019",
    updatedOn: "31/12/2019",
    amount: 480,
    vendor: "SS Enterprises",
    id: "2"
  },
  {
    category: "electricity",
    description: "",
    createdOn: "01/01/2020",
    updatedOn: "01/01/2020",
    amount: 765,
    vendor: "TNEB",
    id: "3"
  },
  {
    category: "vegetables",
    description: "Vegetables for next two weeks",
    createdOn: "04/01/2020",
    updatedOn: "04/01/2020",
    amount: 1000,
    vendor: "Thiruvanmiyur Market",
    id: "4"
  },
  {
    category: "internet",
    description: "Monthly Internet Bill",
    createdOn: "06/01/2020",
    updatedOn: "06/01/2020",
    amount: 950,
    vendor: "Hathway",
    id: "5"
  },
  {
    category: "lpg",
    description: "Indane LPG Gas",
    createdOn: "08/01/2020",
    updatedOn: "08/01/2020",
    amount: 360,
    vendor: "Ambiram Agencies",
    id: "6"
  },
  {
    category: "mobile",
    description: "Mobile Recharge for mom",
    createdOn: "10/01/2020",
    updatedOn: "10/01/2020",
    amount: 149,
    vendor: "Airtel",
    id: "7"
  }
];

const ExpenseList = () => {
  return (
    <FixedContainer>
      <PageTitle>My Expenses</PageTitle>
      <Wrapper>
        {listData.map(data => {
          return (
            <div key={data.id}>
              <Link to={`/details/${data.id}`}>
                <p>{data.createdOn}</p>
                <p>{data.category}</p>
                <p>{data.amount}</p>
              </Link>
            </div>
          );
        })}
      </Wrapper>
    </FixedContainer>
  );
};

export default ExpenseList;
