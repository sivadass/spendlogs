import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import _get from "lodash/get";
import { Store } from "../store";
import { actionTypes, authActions } from "../store/actions";
import { FixedContainer, PageTitle, Wrapper, Main } from "../styled/common";
import ExpenseList from "../components/expense-list";
import { Icon } from "../components/core";
import { getCategory, formatAmount } from "../utils/common";

const last5Transactions = [
  {
    category: "travel",
    description: "Metro Pass Recharge",
    createdOn: "15/01/2022",
    updatedOn: "15/01/2022",
    amount: 200,
    vendor: "Chennai Metro",
    id: "15"
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
  }
];

const AddExpense = () => {
  return (
    <FixedContainer padding={"0 16px"}>
      <DashboardContainer>
        <KPIContainer>
          <KPIItem>
            <Wrapper>
              <Icon name="account_balance_wallet" />
              <h2>{formatAmount(34567)}</h2>
              <p>This Month</p>
            </Wrapper>
          </KPIItem>
          <KPIItem>
            <Wrapper>
              <Icon name="date_range" />
              <h2>{formatAmount(7834567)}</h2>
              <p>Last 6 Months</p>
            </Wrapper>
          </KPIItem>
          <KPIItem>
            <Wrapper>
              <Icon name="motorcycle" />
              <h2>Travel</h2>
              <p>Most spent</p>
            </Wrapper>
          </KPIItem>
          <KPIItem>
            <Link to="/expense/add">
              <Wrapper>
                <Icon name="add_circle" />
                <h2>Create</h2>
                <p>New Expense</p>
              </Wrapper>
            </Link>
          </KPIItem>
        </KPIContainer>
        <ExpenseListContainer>
          <h2>Recent 5 Transactions</h2>
          <ExpenseList data={last5Transactions} />
        </ExpenseListContainer>
      </DashboardContainer>
    </FixedContainer>
  );
};

const DashboardContainer = styled.div`
  background: #fff;
`;

const KPIItem = styled.div`
  width: 25%;
  a:hover {
    text-decoration: none;
  }
  ${Wrapper} {
    padding: 16px;
    margin-right: 16px;
    border-radius: 8px;
    background-color: #70afc1;
    i {
      display: block;
      font-size: 36px;
      color: rgba(255, 255, 255, 0.66);
      margin-bottom: 24px;
    }
    h2 {
      font-size: 32px;
      color: #fff;
    }
    p {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.66);
    }
  }
  @media (max-width: 480px) {
    width: 50%;
    margin-bottom: 16px;
    ${Wrapper} {
      i {
        margin-bottom: 16px;
      }
      h2 {
        font-size: 20px;
      }
    }
  }
`;

const KPIContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 16px 0 32px 0;
  ${KPIItem}:nth-child(${1}) {
    ${Wrapper} {
      background-image: linear-gradient(141deg, #70afc1 0%, #06537b 75%);
    }
  }
  ${KPIItem}:nth-child(${2}) {
    ${Wrapper} {
      background-image: linear-gradient(141deg,#FF9800 0%,#f3d9b4 75%);
    }
  }
  ${KPIItem}:nth-child(${3}) {
    ${Wrapper} {
      background-image: linear-gradient(141deg, #606af7 0%, #2932b5 75%);
    }
  }
  ${KPIItem}:nth-child(${4}) {
    ${Wrapper} {
      background-image: linear-gradient(141deg,#4CAF50 0%,#FFEB3B 75%);
    }
  }
  ${KPIItem}:last-child {
    ${Wrapper} {
      margin-right: 0;
    }
  }
  @media (max-width: 480px) {
    margin: 0 0 16px 0;
    ${KPIItem}:nth-child(${2}) {
      ${Wrapper} {
        margin-right: 0;
      }
    }
  }
`;

const ExpenseListContainer = styled.div`
  h2 {
    margin-bottom: 16px;
  }
`;

export default AddExpense;
