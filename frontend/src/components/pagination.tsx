import React from "react";
import styled from "styled-components";

interface PaginationProps {
  total: number;
  limit: number;
  page: number;
  onClick: (p: number) => any;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  limit = 10,
  page,
  onClick
}) => {
  const totalPagesCount = Math.ceil(total / limit);
  const pages = new Array(totalPagesCount)
    .fill(1)
    .map((v: any, index: number) => v * (index + 1));
  if (totalPagesCount <= 1) {
    return null;
  }
  return (
    <Container>
      <ul>
        {pages.map(p => (
          <li>
            <button disabled={p === page} onClick={() => onClick(p)}>
              {p}
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  padding: 32px;
  ul {
    display: flex;
    justify-content: center;
    li {
      button {
        max-width: 64px;
        border-radius: 4px;
        border: none;
        background: #f7f7f7;
        margin: 0 2px;
      }
      &:first-child {
        button {
          border-radius: 4px 0 0 4px;
        }
      }
      &:last-child {
        button {
          border-radius: 0 4px 4px 0;
        }
      }
    }
  }
`;

export default Pagination;
