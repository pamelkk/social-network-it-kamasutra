import React from "react";
import Games from "./Games";

const GamesContainer = (props) => {
    let state = props.store.getState().gamesMenu;

    return (
        <Games gamesMenu={state} />
    );
};

export default GamesContainer;