import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const AppContainer = styled.View`
    position: relative;
    width: ${Dimensions.get("window").width}px;
    height: ${Dimensions.get("window").height}px;
    flex: 1;
`;

export const FeedContainer = styled.View`
    flex: 1;
`;

export const NoPosts = styled.Text`
    
`;