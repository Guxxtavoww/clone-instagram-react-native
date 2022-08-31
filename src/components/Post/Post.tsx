import React from "react";

import * as C from "./styles";
import { IPost } from "../../../types";

interface IPostProps {
    postData: IPost;
}

const Post: React.FC<IPostProps> = ({ postData }) => {
    const [ isLiked, setIsLiked ] = React.useState(postData.isLiked);
    const [ isDescShowing, setIsDescShowing ] = React.useState(false);
    const [ likeCount, setLikeCount ] = React.useState(postData.likes);

    const handleLike = () => {
        if (isLiked) {
            setLikeCount(likeCount - 1);
            setIsLiked(false);
            return;
        }
        setLikeCount(likeCount + 1);
        setIsLiked(true);
    }

    const handleDescShow = () => setIsDescShowing(!isDescShowing);

    return (
        <C.PostContainer>
            <C.ProfileInfo>
                <C.ProfilePic source={{ uri: postData.profileImage }} />
                <C.ProfileName>{postData.name}</C.ProfileName>
            </C.ProfileInfo>
            <C.PostImage source={{ uri: postData.postImage }} resizeMode="cover" />
            <C.ControlsBox>
                <C.BtnImageBx onPress={handleLike}>
                    <C.BtnImage
                        source={isLiked ? require("../../assets/likeada.png") : require("../../assets/like.png")}
                    />
                </C.BtnImageBx>
                <C.BtnImageBx>
                    <C.BtnImage source={require("../../assets/send.png")} />
                </C.BtnImageBx>
            </C.ControlsBox>
            <C.LikesBox>
                <C.LikeText>Likes: {likeCount}</C.LikeText>
            </C.LikesBox>
            <C.DescBox>
                <C.DescName>{postData.name}</C.DescName>
                <C.BtnDesc onPress={handleDescShow}>
                    <C.BtnDescText>{isDescShowing ? "Parar de ver Descrição" : "Ver Descrição"}</C.BtnDescText>
                </C.BtnDesc>
               <C.Desc>{isDescShowing && postData.desc}</C.Desc>
            </C.DescBox>
        </C.PostContainer>
    );
}

export default Post;