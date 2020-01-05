import React from "react";
import classNames from "classnames";
import styled from "styled-components";

interface SpinnerProps {
  size?: number;
  color?: string;
  block?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 48,
  color = "#0a6b8a",
  block = false
}) => {
  return (
    <StyledSpinner display={block}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="32"
          strokeWidth="8"
          stroke={color}
          strokeDasharray="50.26548245743669 50.26548245743669"
          fill="none"
          strokeLinecap="round"
          transform="rotate(298.787 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
      </svg>
    </StyledSpinner>
  );
};

const StyledSpinner = styled.div<{ display: boolean }>`
  ${props =>
    props.display &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 32px;
  `}
  svg {
    vertical-align: middle;
  }
`;

export default Spinner;
