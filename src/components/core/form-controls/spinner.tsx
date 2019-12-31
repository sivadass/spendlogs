import React from "react";
import classNames from "classnames";
import styled from "styled-components";

interface SpinnerProps {
  loading?: boolean;
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  loading = false,
  size = 32,
  color = "#409ff"
}) => {
  return (
    <StyledSpinner>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 44 44"
        stroke={color}
        className={classNames("peace-spinner", { loading: loading })}
      >
        <g fill="none" fillRule="evenodd" strokeWidth="2">
          <circle cx="22" cy="22" r="16.4636">
            <animate
              attributeName="r"
              begin="0s"
              dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="0s"
              dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="22" cy="22" r="19.9127">
            <animate
              attributeName="r"
              begin="-0.9s"
              dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="-0.9s"
              dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </StyledSpinner>
  );
};

const StyledSpinner = styled.div`
  .peace-spinner {
    vertical-align: middle;
    margin-right: 8px;
  }
`;

export default Spinner;
