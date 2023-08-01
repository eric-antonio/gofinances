import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.colors.background};

`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;

    justify-content: flex-end;
    align-items: center;
    padding-bottom: 19px;

    background-color: ${({theme})=> theme.colors.primary};
`;

export const Title = styled.Text`

    font-family: ${({theme}) => theme.fonts.regular};
    color:${({theme})=> theme.colors.shape};
    font-size: ${RFValue(18)}px;
`;
