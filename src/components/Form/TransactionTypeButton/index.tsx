import React from "react";
import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Icon,
  Title
}from './styles';

const icons = {
  up:'arrow-up-circle',
  down:'arrow-down-circle'
}

interface Pros extends TouchableOpacityProps{
  title : string;
  type: 'up' | 'down';
  isActive: boolean;
}

export function TransactionTypeButton({type, title, isActive, ...rest} : Pros){
  return(
    <Container isActive={isActive} type={type} {...rest}>

      <Icon 
        name={icons[type]}
        type={type}
      />
      <Title> {title}</Title>
      
    </Container>
  )
}