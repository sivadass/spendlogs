import styled from "styled-components";

export const MaterialIcon = styled.i`
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px; /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: "liga";
`;

export const FixedContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;
export const PageTitle = styled.h3`
  margin: 16px 0 24px 0;
  font-size: 24px;
  color: #1d2840;
`;
export const Container = styled.div`
  padding: 0 16px;
`;
export const Wrapper = styled.div``;

export const Main = styled.div`
  z-index: 21;
  position: relative;
  margin: 74px auto 16px auto;
  background: #fff;
  padding: 16px;
  min-height: 300px;
  border-radius: 16px;
  max-width: 1200px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 75px;
  @media (max-width: 1200px) {
    margin-left: 16px;
    margin-right: 16px;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const FixedFormWrapper = styled.div`
  max-width: 360px;
  margin: 0 auto;
  padding: 64px 16px;
  ${PageTitle} {
    text-align: center;
    margin-top: 0;
  }
  @media (max-width: 480px) {
    padding: 16px;
  }
`;
