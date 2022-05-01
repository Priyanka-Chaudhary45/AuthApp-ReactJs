import { BgImg, Flex, GradientText } from "../../utils/mixins";

import { keyframes } from "styled-components";
import styled from "styled-components";

// Hover Effect for Navbar Links
const navItemAnimation = (color) => keyframes`
from{
  width: 0%;
  height: 3px;
  background: transparent;
}
to{
    width: 100%;
    height: 100%;
    background: ${color};
}
`;

export const NavContainer = styled.div`
  height: ${(props) => props.theme.constant.navHeight};
  position: sticky;
  z-index: ${(props) => props.theme.constant.navZIndex};
  ${Flex({ justify: "space-between", align: "center" })}

  box-shadow: 0 1px 2px ${(props) => props.theme.text[0]};

  & .logo {
    display: inline-block;
    height: 100%;
    width: 15rem;
    margin: 0 1rem;

    ${BgImg(`${(props) => props.logo}`)}
  }

  & ul {
    ${Flex({ justify: "space-between", align: "center" })}

    width: 35rem;
    height: 100%;
    margin: 0 2rem;

    list-style: none;

    & li a {
      ${GradientText({
        color1: { color: "primary", variant: 400 },
        color2: { color: "primary", variant: "200" },
      })}

      position: relative;
      padding: 0.7rem;

      font-weight: 700;
      cursor: pointer;
      text-decoration: none;

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
      }

      &:hover {
        &::before {
          animation: ${navItemAnimation(
              `${(props) => props.theme.primary[300]}`
            )}
            0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          border-bottom: 2px solid ${(props) => props.theme.primary[300]};
          background: rgba(0, 0, 0, 0.1);
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
