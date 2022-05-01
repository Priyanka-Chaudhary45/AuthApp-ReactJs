import styled from "styled-components";

export const AuthContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.other[0]};

  & > img {
    position: absolute;
    max-width: 350px;
    max-height: 300px;
    right: 0;
    bottom: 1rem;
    user-select: none;
  }
`;
