import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import {Feather} from"@expo/vector-icons";
import { RFValue,RFPercentage } from "react-native-responsive-fontsize";

// * Container Styles
export const Container =  styled.View`
  background-color: ${({theme}) => theme.colors.secondary};
  width: ${RFValue(300)}px;
  height: ${RFValue(220)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: 42px;
  margin-right: 16px;
  
`; 

// * Header Styles 

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`

  font-family: ${({theme}) => theme.fonts.regular};

  color: ${({theme}) => theme.colors.text_dark};

  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.success};
  font-size: ${RFValue(40)}px;
`;

// * FooTer Styles
export const Footer = styled.View``;

export const Amount = styled.Text`

  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  color: ${({theme})=> theme.colors.text_dark};
  margin-top: 38px;
`;

export const LastTransaction = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme})=> theme.colors.text};
  font-size: ${RFValue(12)}px;
`;