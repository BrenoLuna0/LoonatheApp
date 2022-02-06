import React from 'react';

export type TextProps = {
  bold?: boolean;
};

import * as S from './styles';

const Text: React.FC<TextProps> = ({bold, children}, ...props) => {
  return (
    <S.TextStyle bold={bold} {...props}>
      {children}
    </S.TextStyle>
  );
};

export default Text;
