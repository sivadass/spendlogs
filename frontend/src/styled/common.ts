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
  vertical-align: middle;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: "liga";
`;

export const FixedContainer = styled.div<{ padding?: string }>`
  max-width: 1200px;
  margin: 0 auto 32px auto;
  padding: ${({ padding }) => (padding ? padding : "0 32px")};
`;
export const PageTitle = styled.h3`
  margin: 16px 0 24px 0;
  font-size: 20px;
  font-weight: normal;
  color: #999;
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px 0 32px 0;
  @media (max-width: 480px) {
    margin: 0 0 16px 0;
  }
  & > div:last-child {
    margin-left: auto;
  }
`;
export const FloatingActions = styled.div`
  position: fixed;
  top: 100px;
  @media (min-width: 1201px) {
    right: calc(((100% - 1200px) / 2) + 64px);
  }
  @media (min-width: 481px) and (max-width: 1200px) {
    right: 48px;
  }
  @media (max-width: 480px) {
    right: 32px;
    top: initial;
    bottom: 32px;
  }
`;
export const PageActions = styled.div`
  ul {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    li {
      a,
      button {
        height: 48px;
        padding: 0 16px;
        max-width: 180px;
        min-width: 180px;
        text-align: left;
        display: block;
        &:hover {
          background: #f3f3f3;
        }
      }
      .dropdown-trigger {
        padding: 0;
        button {
          min-width: 48px;
          width: 48px;
          border-radius: 24px;
          padding: 0;
          i {
            margin: 12px;
          }
        }
      }
      .dropdown-contents {
        min-width: 180px;
        button {
          display: flex;
          justify-content: flex-start;
          i {
            margin-right: 8px;
          }
        }
      }
    }
  }
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
  min-height: calc(100vh - 90px);
  border-radius: 16px;
  max-width: 1140px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 75px;
  overflow: hidden;
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
