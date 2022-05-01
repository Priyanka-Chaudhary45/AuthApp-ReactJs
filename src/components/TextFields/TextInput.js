import { ErrorMessage, useField } from "formik";
import { Flex, HexToRGB } from "../../utils/mixins";

import { BiCheckDouble } from "react-icons/bi";
import styled from "styled-components";

// Input Box Styles
const InputBox = styled.div`
  ${Flex({ justify: "start", align: "center" })}
  column-gap: 1rem;
`;

// Label Styles
const Label = styled.label`
  // Width is in theme (min-width will work for all labels in app)
  min-width: ${(props) => props.theme.constant.labelWidth + "rem"};
  color: ${(props) => props.theme.text[300]};
  font-size: 1.4rem;
`;

// Input + Icon Box styles
const Input = styled.div`
  position: relative;
  ${Flex({ justify: "start", align: "stretch" })};

  border-radius: 3px;
  border: ${(props) =>
    props.touched
      ? props.isError
        ? `1px solid ${props.theme.error[300]}`
        : `1px solid ${props.theme.primary[0]}`
      : `1px solid ${props.theme.text[0]}`};

  // Styles for input
  input {
    padding: 7px 10px;

    background: ${(props) => props.theme.other[0]};
    color: ${(props) => props.theme.text[400]};
    font-size: 1.3rem;
    border-radius: 3px;
    outline: none;
    border: none;
  }

  // For Icon Container
  & > div {
    ${Flex({ justify: "center", align: "center" })}
    padding: 0 0.4rem;
    background-color: ${(props) =>
      props.touched
        ? props.isError
          ? HexToRGB(props.theme.error[300], 0.2)
          : HexToRGB(props.theme.primary[0], 0.7)
        : HexToRGB(props.theme.text[0], 0.7)};

    color: ${(props) =>
      props.touched
        ? props.isError
          ? props.theme.error[300]
          : props.theme.primary[200]
        : props.theme.text[200]};

    cursor: pointer;
  }

  small {
    position: absolute;
    bottom: -1.2rem;
    left: 0;
    font-size: 0.9rem;
    color: ${(props) => props.theme.error[300]};
    display: block;
    overflow: hidden;
  }
  // On Hovering input + Icon
  &:hover {
    box-shadow: ${(props) =>
      props.touched
        ? props.isError
          ? `0 1px 1px ${props.theme.error[0]}`
          : `0 1px 1px ${props.theme.primary[0]}`
        : `0 1px 1px ${props.theme.text[0]}`};
  }
`;

const TextInput = ({ label, name, ...otherProps }) => {
  const [field, meta] = useField(name);

  return (
    <InputBox>
      <Label htmlFor={name}>{label}</Label>

      <Input
        isError={meta.error || meta.initialError}
        touched={meta.touched || meta.initialTouched}
      >
        <input name={name} autoComplete="off" {...field} {...otherProps} />
        <div>
          <BiCheckDouble />
        </div>
        <small>
          <ErrorMessage name={name} />
        </small>
      </Input>
    </InputBox>
  );
};

export default TextInput;
