import styled from "styled-components/native";

export const PostContainer = styled.View`
    position: relative;
    margin-bottom: 10px;
`;

export const ProfileInfo = styled.View`
    flex: 1;
    padding: 8px;
    flex-direction: row;
    align-items: center;
`;

export const ProfilePic = styled.Image`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin-right: 10px;
`;

export const ProfileName = styled.Text`
    font-size: 16px;
    text-align: left;
    color: #0d0d0d;
`;

export const PostImage = styled.Image`
    flex: 1; 
    height: 400px;
    align-items: center;
`;

export const ControlsBox = styled.View`
    flex-direction: row;
    padding: 10px;
    gap: 10px;
`;

export const BtnImageBx = styled.TouchableOpacity`
    margin-right: 10px;
`;

export const BtnImage = styled.Image`
    width: 23px;
    height: 23px;
`;

export const DescBox = styled.View`
    padding: 10px;
`;

export const DescName = styled.Text`
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 16px;
    color: #0d0d0d;
`;

export const BtnDesc = styled.TouchableOpacity`
    position: relative;
`;

export const BtnDescText = styled.Text`
    font-weight: 600;
    font-size: 15px;
    color: #0d0d0d;
`;

export const Desc = styled.Text`
    color: #0d0d0d;
    font-size: 14px;
    font-weight: 500;
`;

export const LikesBox = styled.View`
    padding: 10px;
`;

export const LikeText = styled.View`
    font-weight: 600;
    color: #0d0d0d;
`;