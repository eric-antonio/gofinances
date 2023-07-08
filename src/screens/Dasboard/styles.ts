import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { RFPercentage } from "react-native-responsive-fontsize";
import { View } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header =  styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  height: ${RFPercentage(42)}px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const UserInfo = styled.View`

`;

export const Photo= styled.Image``;

export const User= styled.View``;

export const UserGreeting= styled.Text``;

export const UserName= styled.Text``;