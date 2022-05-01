import { Flex } from "../../utils/mixins";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  ${Flex({ justify: "center", align: "center" })}
  padding: 0.7rem 3rem;
  background: linear-gradient(
    to right,
    ${(props) => props.theme[btnType(props.type)][400]},
    ${(props) => props.theme[btnType(props.type)][200]}
  );
  color: ${(props) => props.theme.other[0]};
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1px;
  border-radius: 4px;

  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in;

  :hover {
    box-shadow: 0 1px 5px ${(props) => props.theme.text[100]};
  }

  :active {
    box-shadow: 0 1px 3px ${(props) => props.theme.text[100]};
    transform: translateY(0.045rem);
  }
`;

const btnType = (type) => {
  type = type ? type.toLowerCase() : "";

  switch (type) {
    case "primary":
      return "primary";
    case "secondary":
      return "secondary";
    case "error":
      return "error";
    case "text":
      return "text";
    default:
      return "primary";
  }
};

// @desc: Contained button component
// Props: label: string,
//        variant: enum['primary', 'secondary', 'error', 'text']  @default: 'primary',
const FilledButton = ({ label, variant, ...props }) => {
  return (
    <>
      <Button type={variant} {...props}>
        {label}
      </Button>
    </>
  );
};

export default FilledButton;
