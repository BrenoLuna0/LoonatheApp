import styled from 'styled-components/native';
import {TextProps} from './index';

export const TextStyle = styled.Text<TextProps>`
  color: #dce7fa;
  font-size: 12px;
  ${({bold}) => {
    return !bold
      ? `font-family: 'Roboto-Regular';`
      : `font-family: 'Roboto-Bold';`;
  }}
`;
