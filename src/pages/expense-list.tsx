import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import _get from "lodash/get";
import { Icon } from "../components/core";
import { FixedContainer, PageTitle, Wrapper } from "../styled/common";
import { getCategory, formatAmount } from "../utils/common";

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
    category: "fruits_and_vegetables",
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
    category: "lpg_gas",
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
  },
  {
    category: "services_and_maintenance",
    description: "AC Repair",
    createdOn: "10/01/2020",
    updatedOn: "10/01/2020",
    amount: 550,
    vendor: "AquaCon",
    id: "8"
  },
  {
    category: "snacks",
    description: "Chips and biscuits",
    createdOn: "10/01/2020",
    updatedOn: "10/01/2020",
    amount: 180,
    vendor: "Super Market",
    id: "9"
  },
  {
    category: "investments",
    description: "Mutual Funds",
    createdOn: "10/01/2020",
    updatedOn: "10/01/2020",
    amount: 17000,
    vendor: "Zerodha",
    id: "10"
  },
  {
    category: "taxes",
    description: "Property Tax",
    createdOn: "10/01/2020",
    updatedOn: "10/01/2020",
    amount: 65600,
    vendor: "Chennai Corporation",
    id: "11"
  },
  {
    category: "gym",
    description: "Gym Fees",
    createdOn: "10/01/2020",
    updatedOn: "10/01/2020",
    amount: 1000,
    vendor: "OMR Fitness Studio",
    id: "12"
  },
  {
    category: "pets",
    description: "Pedigree",
    createdOn: "12/01/2020",
    updatedOn: "12/01/2020",
    amount: 3000,
    vendor: "Pet Shop",
    id: "13"
  },
  {
    category: "kids",
    description: "Sketchbook",
    createdOn: "15/01/2022",
    updatedOn: "15/01/2022",
    amount: 180,
    vendor: "Stationary Shop",
    id: "14"
  },
  {
    category: "transportation_and_auto",
    description: "Oil Change",
    createdOn: "15/01/2022",
    updatedOn: "15/01/2022",
    amount: 750,
    vendor: "Athvith Suzuki",
    id: "15"
  },
  {
    category: "medical",
    description: "Mom medicines",
    createdOn: "15/01/2022",
    updatedOn: "15/01/2022",
    amount: 550,
    vendor: "Apollo Medicals",
    id: "16"
  }
];

const ExpenseList = () => {
  return (
    <FixedContainer>
      <PageTitle>My Expenses</PageTitle>
      <Wrapper>
        {listData.map(data => {
          const category = getCategory(data.category);
          return (
            <ExpenseListItem key={data.id}>
              <Link to={`/details/${data.id}`}>
                <CategoryIcon>
                  <Icon name={_get(category, "icon", "")} />
                </CategoryIcon>
                <ExpenseDetails>
                  <Wrapper>
                    <h6>{_get(data, "vendor", "")}</h6>
                    <p>
                      <span>{data.createdOn}</span>,{" "}
                      <span>{_get(category, "label", "-")}</span>
                    </p>
                  </Wrapper>
                </ExpenseDetails>
                <ExpenseAmount>
                  <h4>{formatAmount(data.amount)}</h4>
                </ExpenseAmount>
              </Link>
            </ExpenseListItem>
          );
        })}
      </Wrapper>
    </FixedContainer>
  );
};

const CategoryIcon = styled.div`
  flex-shrink: 0;
  height: 44px;
  width: 44px;
  line-height: 44px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  background: #4099ff;
  border: 1px solid transparent;
  transition: all 300ms ease-in;
  i {
    line-height: 44px;
  }
`;

const ExpenseListItem = styled.div`
  a {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    color: #999;
    background: #fff;
    transition: all 300ms ease-in;
    &:hover {
      text-decoration: none;
      background: #ecf3fb;
      color: #4099ff;
      border-bottom-color: transparent;
      ${CategoryIcon} {
        background: #fff;
        color: #4099ff;
        border-color: #4099ff;
      }
    }
  }
`;

const ExpenseDetails = styled.div`
  flex-grow: 1;
  overflow: hidden;
  ${Wrapper} {
    margin-left: 16px;
    width: 100%;
    h6 {
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      color: #666;
      width: 90%;
      white-space: nowrap;
      overflow: hidden;
      display: block;
      text-overflow: ellipsis;
    }
    p {
      font-size: 13px;
      width: 90%;
      white-space: nowrap;
      overflow: hidden;
      display: block;
      color: #999;
      text-overflow: ellipsis;
      span:nth-child(2) {
        color: red;
        padding: 2px 6px;
        border-radius: 8px;
        font-size: 12px;
        background: #ddd;
        color: #666;
      }
    }
  }
`;
const ExpenseAmount = styled.div`
  width: 90px;
  flex-shrink: 0;
  h4 {
    text-align: right;
    line-height: 44px;
    font-size: 18px;
    font-weight: bold;
    margin-left: 16px;
  }
`;

export default ExpenseList;
