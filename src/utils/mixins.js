import { css } from "styled-components";

export const Flex = ({ justify, align }) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

// Adds gradient to the text
// @params: {color1: {color, variant}, color2: {color, variant}}
export const GradientText = ({ color1, color2 }) => css`
  background: linear-gradient(
    to right,
    ${(props) =>
      color1
        ? props.theme[color1.color][color1.variant]
        : props.theme.primary[400]},
    ${(props) =>
      color2
        ? props.theme[color2.color][color2.variant]
        : props.theme.primary[600]}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const BgImg = (img) => css`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const SmallBreakPoint = () => css`
  @media screen and (max-width: 850px) {
    @content;
  }
`;

export function HexToRGB(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}
