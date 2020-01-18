import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "./core/icon";

interface BreadCrumbProps {
  links: {
    name: string;
    url: string;
  }[];
}

const BreadCrumbs: React.FC<BreadCrumbProps> = ({ links }) => {
  return (
    <BreadCrumbsContainer>
      {links.map((link, index: number) => {
        if (index === links.length - 1) {
          return (
            <li>
              <span>{link.name}</span>
            </li>
          );
        }
        return (
          <li>
            <Link to={link.url}>{link.name}</Link> <Icon name="chevron_right" />
          </li>
        );
      })}
    </BreadCrumbsContainer>
  );
};

const BreadCrumbsContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #999;
  li {
    display: flex;
    align-items: center;
    margin-right: 4px;
    font-size: 20px;
    @media (max-width: 480px) {
      font-size: 16px;
    }
    a {
      padding: 8px 0;
      color: #0a6b8a;
      &:hover {
        text-decoration: none;
        color: #0a6b8a;
      }
    }
    i {
      color: #ddd;
    }
    span {
      color: #999;
    }
  }
`;

export default BreadCrumbs;
