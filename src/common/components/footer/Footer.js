import React from "react";
import { NavLink } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { SET_GAME_SELECTION_TYPE, SET_OPEN_GAME_TYPES } from "redux/actions/mainActions/generalActions";

// Styles, Icons, Images
import s from "./Footer.module.scss";
import Text from "common/components/UI/text/Text";

const FooterLink = ({ title, iconNormal, iconActive, ...rest }) => {
	return (
		<NavLink {...rest}>
			{(props) => (
				<div className={props.isActive ? s.activeLink : s.normalLink}>
					<div className={props.isActive ? iconActive : iconNormal} />
					<Text ns={title} />
				</div>
			)}
		</NavLink>
	);
};

const Footer = () => {
	const dispatch = useDispatch();

	const handleOpenGameSelect = () => {
		dispatch(SET_GAME_SELECTION_TYPE({ type: "quickPlay", id: null }));
		dispatch(SET_OPEN_GAME_TYPES(true));
	};

	return (
		<div className={s.footer}>
			<FooterLink to="/" title="menu.home" iconNormal={s.homeIconNormal} iconActive={s.homeIconActive} />
			<FooterLink
				to="/leagues"
				title="menu.leagues"
				iconNormal={s.leagueIconNormal}
				iconActive={s.leagueIconActive}
			/>

			<div onClick={handleOpenGameSelect} className="text-center">
				<div className={s.playButtonCircle}>
					<div className={s.playIconOutlined} />
				</div>

				<Text ns="play" className={s.footerText} />
			</div>

			<FooterLink to="/search" title="search" iconNormal={s.searchIconNormal} iconActive={s.searchIconActive} />
			<FooterLink
				to="/profile"
				title="menu.profile"
				iconNormal={s.profileIconNormal}
				iconActive={s.profileIconActive}
			/>
		</div>
	);
};

export default Footer;
