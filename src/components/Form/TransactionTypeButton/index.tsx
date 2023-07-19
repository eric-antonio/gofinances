import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Icon,
  Title
}from './styles';

interface Pros extends TouchableOpacityProps{
  title : string;
  type: 'up' | 'down';
}

export function TransactionTypeButton({title, ...rest} : Pros){
  return(
    <Container>

      <Icon/>
      <Title> {title}</Title>
    </Container>
  )
}