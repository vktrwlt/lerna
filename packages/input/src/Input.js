import styled from "styled-components";
import { colors } from "@vktrwlt/design-tokens";

export const Input = styled.input`
  border-radius: 8px;
  border: 2px solid;
  border-color: ${colors.red};
  font-size: 16px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  padding: 16px 16px;

  width: 200px;

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;
