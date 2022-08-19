import styled from "styled-components/native";

export const TopbarContainer = styled.View`
    height: 55px;
    background-color: #fff;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    border-bottom: 0.2px solid #000; 
    z-index: 10;
`;

export const TopbarLogoContainer = styled.TouchableOpacity`

`;

export const TopbarLogo = styled.Image`

`;

export const TopbarSendLogoContainer = styled.TouchableOpacity`

`;

export const TopbarSendLogo = styled.Image`
    width: 23px;
    height: 23px;
`;