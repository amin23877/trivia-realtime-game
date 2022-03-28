import "./SearchForPlayer.scss";
import searchForUserCenter from "assets/images/icons/searchForUserCenter.svg";
import searchForUserRing from "assets/images/icons/searchForUserRing.svg";
import { Button } from "@material-ui/core";
import Text from "common/components/UI/text/Text";

const SearchForPlayer = ({ handleClose }) => {
	return (
		<div className="search-for-player">
			<Text ns="find-playmate" className="search-for-player__title" />
			<div className="search-for-player__icon">
				<img src={searchForUserRing} className="search-for-player__icon--ring" />
				<img src={searchForUserCenter} className="search-for-player__icon--center" />
			</div>
			<Button onClick={handleClose} className="search-for-player__cancel-btn">
				<Text as="span" ns="cancel" />
			</Button>
		</div>
	);
};

export default SearchForPlayer;
