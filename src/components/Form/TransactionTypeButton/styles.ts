import styled from "styled-components/native";
import { Feather} from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({theme})=> theme.colors.shape};
`;

export const Icon = styled(Feather)`

  font-size: ${RFValue(24)}px;
  margin-right: 12px;
`;

export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;