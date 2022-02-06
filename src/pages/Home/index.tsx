import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Meet Loona</S.Title>
      </S.TitleContainer>
      <Button />
    </S.Container>
  );
};

export default Home;
