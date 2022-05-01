import { BsCheckAll } from "react-icons/bs";
import { Field } from "formik";
import { Flex } from "../../utils/mixins";
import React from "react";
import styled from "styled-components";

const CheckboxLabel = styled.label`
  ${Flex({ justify: "start", align: "center" })}
  column-gap: .3rem;
  pointer-events: none;

  span {
    position: relative;
    ${Flex({ justify: "center", align: "center" })}

    input[type="checkbox"] {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
      height: 16px;
      width: 16px;
      opacity: 0;
      border: none !important;
      cursor: pointer;
      pointer-events: auto;

      :checked ~ svg {
        background-color: ${(props) => props.theme.primary[100]};
        border: 1px solid transparent;
        color: ${(props) => props.theme.primary[500]};
        border-radius: 5px;
        transform: rotate(0deg) scale(1);
        opacity: 1;
      }
    }

    svg {
      position: relative;
      border: 1px solid ${(props) => props.theme.text[100]};
      color: ${(props) => props.theme.text[100]};
      border-radius: 5px;
      transition: all 0.2s ease-out;
      cursor: pointer;
    }
  }

  p {
    flex: 1;
    font-size: 1.1rem;
    color: ${(props) => props.theme.text[300]};
    pointer-events: auto;
    cursor: pointer;
  }
`;
const Checkbox = ({ name, label, ...props }) => {
  return (
    <>
      <CheckboxLabel {...props}>
        <span>
          <Field type="checkbox" name={name} />
          <BsCheckAll />
        </span>
        <p>{label}</p>
      </CheckboxLabel>
    </>
  );
};

export default Checkbox;
