import { BgImg, Flex, HexToRGB } from "../../utils/mixins";

import styled from "styled-components";

export const LoginBox = styled.div`
  position: relative;
  min-height: inherit;
  width: 100%;
  background-color: ${(props) => props.theme.other[0]};
  ${Flex({ justify: "center", align: "center" })}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    width: 100%;
    z-index: 0;

    background: linear-gradient(
      to right,
      ${(props) => props.theme.primary[600]},
      ${(props) => props.theme.primary[200]}
    );
    clip-path: polygon(0% 0%, 100% 0%, 100% 30%, 0% 90%);
  }

  & > div {
    position: relative;
    min-width: 32rem;
    width: 40rem;
    height: 55rem;
    padding: 0 2rem;

    background-color: ${(props) => props.theme.other[0]};
    border-radius: 5px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
    z-index: 1;

    ${Flex({ justify: "start", align: "center" })}
    flex-direction: column;
    row-gap: 2rem;

    .logo {
      ${BgImg((props) => props.logo)}
      height: 5rem;
      width: 100%;
      margin: auto;
      margin-top: 2rem;
    }

    .titleBox {
      width: 100%;
      ${Flex({ justify: "end", align: "center" })}
      flex-direction: column;
      flex-basis: 18%;

      border-top: 1px solid ${(props) => HexToRGB(props.theme.text[0], 0.3)};

      h2 {
        color: ${(props) => props.theme.text[200]};
        font-size: 2.3rem;
        font-weight: 400;
        margin: 0;
      }
      p {
        max-width: 70%;
        color: ${(props) => props.theme.text[100]};
        font-size: 1.2rem;
        font-weight: 100;
        text-align: center;
      }
    }

    form {
      margin-top: 3rem;
      flex: 1;

      ${Flex({ justify: "start", align: "space-between" })}
      flex-direction: column;
      row-gap: 2rem;

      border-radius: 5px;

      & > div {
        align-self: stretch;
        ${Flex({ justify: "space-between", align: "center" })}
      }
    }

    .to_register {
      justify-self: flex-end;
      color: ${(props) => props.theme.text[200]};
      font-size: 1.2rem;
      font-weight: 400;

      a {
        color: ${(props) => props.theme.primary[300]};
        font-size: 1.2rem;

        :hover {
          text-shadow: 0 0 5px ${(props) => props.theme.text[0]};
        }
      }
    }
  }
`;
