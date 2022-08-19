import React from "react";

import * as C from "./styles";
import { IPost } from "../../../types";

interface IPostProps {
    postData: IPost;
}

const Post: React.FC<IPostProps> = ({ postData }) => {
    const [ isDescShowing, setIsDescShowing ] = React.useState<boolean>(false);

    const handleDescShow = () => setIsDescShowing(!isDescShowing);

    return (
        <C.PostContainer>
            <C.ProfileInfo>
                <C.ProfilePic source={{ uri: postData.profileImage }} />
                <C.ProfileName>{postData.name}</C.ProfileName>
            </C.ProfileInfo>
            <C.PostImage source={{ uri: postData.postImage }} resizeMode="cover" />
            <C.ControlsBox>
                <C.BtnImageBx>
                    <C.BtnImage source={require("../../assets/like.png")} />
                </C.BtnImageBx>
                <C.BtnImageBx>
                    <C.BtnImage source={require("../../assets/send.png")} />
                </C.BtnImageBx>
            </C.ControlsBox>
            <C.DescBox>
                <C.DescName>{postData.name}</C.DescName>
                <C.BtnDesc onPress={handleDescShow}>
                    <C.BtnDescText>{isDescShowing ? "Parar de ver Descrição" : "Ver Descrição"}</C.BtnDescText>
                </C.BtnDesc>
                { isDescShowing && <C.Desc>{postData.desc}</C.Desc> }
            </C.DescBox>
        </C.PostContainer>
    );
}

export default Post;