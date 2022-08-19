import React from "react";

import * as C from "./styles";

interface ITopbarProps {
    clearFeed: () => void;
}

const Topbar: React.FC<ITopbarProps> = ({ clearFeed }) => {
    return (
        <C.TopbarContainer>
            <C.TopbarLogoContainer onPress={clearFeed}>
                <C.TopbarLogo
                    source={require("../../assets/logo.png")}
                />
            </C.TopbarLogoContainer>
            <C.TopbarSendLogoContainer>
                <C.TopbarSendLogo 
                    source={require("../../assets/send.png")}
                />
            </C.TopbarSendLogoContainer>
        </C.TopbarContainer>
    );
}

export default Topbar;