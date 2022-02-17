import React from "react";

import s from "./PlayButton.module.scss";

const PlayButton = ({ onClick, className, children }) => {
	return (
		<button className={s.playButton + " " + className} onClick={onClick}>
			{children}
		</button>
	);
};

export default PlayButton;
