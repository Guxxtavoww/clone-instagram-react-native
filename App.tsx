import React from "react";
import { FlatList } from "react-native";

import { IPost } from "./types";
import { Topbar, Post } from "./src/components";
import { AppContainer, FeedContainer, NoPosts } from "./app.styles";

const App: React.FC = () => {
    const [ feed, setFeed ] = React.useState<IPost[]>([
        {
            id: "1",
            name: "Lucas Silva",
            desc: "Mais um dia de muitos bugs :)",
            profileImage: "https://sujeitoprogramador.com/instareact/fotoPerfil1.png",
            postImage: "https://sujeitoprogramador.com/instareact/foto1.png",
            isLiked: false,
            likes: 1
        },
        {
            id: "2",
            name: "Matheus",
            desc: "Isso sim é ser raiz!!!!!",
            profileImage: "https://sujeitoprogramador.com/instareact/fotoPerfil2.png",
            postImage: "https://sujeitoprogramador.com/instareact/foto2.png",
            isLiked: false,
            likes: 0
        },
        {
            id: "3",
            name: "Jose Augusto",
            desc: "Bora trabalhar Haha",
            profileImage: "https://sujeitoprogramador.com/instareact/fotoPerfil3.png",
            postImage: "https://sujeitoprogramador.com/instareact/foto3.png",
            isLiked: true,
            likes: 3
        },
        {
            id: "4",
            name: "Gustavo Henrique",
            desc: "Isso sim que é TI!",
            profileImage: "https://sujeitoprogramador.com/instareact/fotoPerfil1.png",
            postImage: "https://sujeitoprogramador.com/instareact/foto4.png",
            isLiked: true,
            likes: 2
        },
        {
            id: "5",
            name: "Guilherme",
            desc: "Boa tarde galera do insta...",
            profileImage: "https://sujeitoprogramador.com/instareact/fotoPerfil2.png",
            postImage: "https://sujeitoprogramador.com/instareact/foto5.png",
            isLiked: true,
            likes: 32
        }
    ] as IPost[]);

    const clearFeed = () => setFeed([] as IPost[]);

    return (
        <AppContainer>
            <Topbar clearFeed={clearFeed} />
            <FeedContainer>
                {
                    feed.length ? (
                        <FlatList
                            data={feed}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => <Post postData={item} key={index} />}
                        />
                    ) : (
                        <NoPosts>Não há Posts</NoPosts>
                    )
                }
            </FeedContainer>
        </AppContainer>
    );
}

export default App;