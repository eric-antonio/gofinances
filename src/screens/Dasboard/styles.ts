import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { RFPercentage, RFValue} from "react-native-responsive-fontsize";
import { Feather } from'@expo/vector-icons';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

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

export const UserWrapper =styled.View`
  width: 100%;

  padding: 0 24px;
  /* This will only be apolied on ios Iphone X */
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;

`;

export const Photo= styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const User= styled.View`
  margin-left:17px ;
  
`;

export const UserGreeting= styled.Text`
  color: ${({theme})=> theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const UserName= styled.Text`
  color: ${({theme})=> theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
  color: ${({theme})=> theme.colors.secondary};
  font-size: ${RFValue(24)};
`;

export const HighlightCards = styled.ScrollView.attrs({

  horizontal:true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle:{paddingHorizintal:24}

})``;
