import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { RFPercentage, RFValue} from "react-native-responsive-fontsize";
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
  flex-direction: row;
  align-items: center;

`;

export const Photo= styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 10px;
`;

export const User= styled.View`
  margin-left:17px ;
`;

export const UserGreeting= styled.Text``;

export const UserName= styled.Text``;