import React from "react";
import classes from './Games.module.css';
import Game from "./Game/Game";

const Games = (props) => {
    let state = props.gamesMenu;
    let gamesElements = state.games.map(game => <Game link={game.link} name={game.name} img={game.img} />)

  return (
    <div>
        <ul className={classes.gamesList}>
          {gamesElements}
        </ul>
    </div>
  );
};

export default Games;
